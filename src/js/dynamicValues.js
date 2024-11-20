class TemplateEngine {
  constructor() {}

  /**
   * Main function to process templates
   * @param {string} template - HTML template string
   * @param {Object} data - Data object to populate template
   * @returns {string} Processed HTML
   */
  process(template, data) {
    // Process directives first
    template = this.processDirectives(template, data);

    // Then process simple value replacements
    return template.replace(/\{\{(.*?)\}\}/g, (match, path) => {
      try {
        const value = this.resolveValue(path.trim(), data);
        return this.formatValue(value);
      } catch {
        return ""; // Return an empty string for unresolved paths
      }
    });
  }

  /**
   * Process template directives like @foreach and @if
   */
  processDirectives(template, data) {
    let hasDirectives = true;

    while (hasDirectives) {
      const beforeProcessing = template;

      // Handle @foreach for nested loops
      template = this.processForEach(template, data);

      // Handle @if for conditional rendering
      template = this.processIf(template, data);

      // Check if further processing is needed
      hasDirectives = template !== beforeProcessing;
    }

    return template;
  }

  /**
   * Handle @foreach loops
   */
  processForEach(template, data) {
    const regex = /@foreach\s+(\w+)\s+in\s+([^\n]+)([\s\S]*?)@end/g;
    let match;

    while ((match = regex.exec(template)) !== null) {
      const [fullMatch, item, collectionPath, content] = match;

      try {
        const collection = this.resolveValue(collectionPath.trim(), data);

        if (!Array.isArray(collection)) {
          console.warn(`@foreach error: '${collectionPath}' is not an array`);
          continue; // Skip invalid @foreach
        }

        // Process each item in the collection
        const processedContent = collection
          .map((itemData) => {
            const scopedData = { ...data, [item]: itemData };
            return this.process(content, scopedData); // Recursive processing
          })
          .join("");

        // Replace the whole @foreach block with the processed content
        template = template.replace(fullMatch, processedContent);
      } catch (error) {
        console.error(`Error processing @foreach: ${error.message}`);
      }
    }

    return template;
  }

  /**
   * Handle @if conditions
   */
  processIf(template, data) {
    const regex = /@if\s+([^\n]+)([\s\S]*?)(?:@else([\s\S]*?))?@end/g;
    let match;

    while ((match = regex.exec(template)) !== null) {
      const [fullMatch, condition, ifContent, elseContent = ""] = match;

      try {
        const conditionResult = this.evaluateCondition(condition, data);
        const processedContent = conditionResult
          ? this.process(ifContent, data) // Process the 'if' content
          : this.process(elseContent, data); // Process the 'else' content

        // Replace the whole @if block with the processed content
        template = template.replace(fullMatch, processedContent);
      } catch (error) {
        console.error(`Error processing @if: ${error.message}`);
      }
    }

    return template;
  }

  /**
   * Resolve nested object values
   */
  resolveValue(path, obj) {
    const parts = path.split(".");
    let current = obj;

    for (const part of parts) {
      if (current === null || current === undefined) {
        throw new Error(`Cannot resolve "${path}"`);
      }
      current = current[part];
    }

    return current;
  }

  /**
   * Format values for rendering
   */
  formatValue(value) {
    if (value === undefined || value === null) return "";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
  }

  /**
   * Evaluate conditions for @if directives
   */
  evaluateCondition(condition, data) {
    try {
      const value = this.resolveValue(condition, data);
      return !!value;
    } catch {
      return false;
    }
  }
}

// Example usage:

