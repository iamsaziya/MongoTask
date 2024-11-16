# Template System Documentation

## Overview
This template system provides a flexible way to render dynamic content without imposing any styling constraints. It supports both simple value replacement and advanced directives for loops and conditions.

## Basic Usage

### 1. Value Replacement
Use double curly braces to output values:
```html
<h1>{{user.name}}</h1>
<p>{{user.email}}</p>
```

### 2. Loop Directive
Use `@foreach` to iterate over arrays:
```html
@foreach item in items
  <div>{{item.name}}</div>
@end
```

### 3. Conditional Directive
Use `@if` for conditional rendering:
```html
@if user.isAdmin
  <div>Admin Content</div>
@else
  <div>User Content</div>
@end
```

## Example Templates

### Basic Project List
```html
<div class="projects">
  @foreach project in user.projects
    <div class="project">
      <h2>{{project.name}}</h2>
    </div>
  @end
</div>
```

### Complex Nested Structure
```html
<div class="dashboard">
  @if user.isLoggedIn
    @foreach project in user.projects
      <div class="project">
        <h3>{{project.name}}</h3>
        @foreach task in project.tasks
          <div class="task">
            <span>{{task.name}}</span>
            <span>{{task.status}}</span>
          </div>
        @end
      </div>
    @end
  @else
    <div>Please log in</div>
  @end
</div>
```

## Best Practices

1. **Separation of Concerns**
   - Keep all styling in your CSS files
   - Use semantic class names in your templates
   - Avoid inline styles

2. **Template Structure**
   - Use meaningful class names that match your CSS
   - Keep templates focused and modular
   - Use nested directives sparingly for better readability

3. **Error Handling**
   - The system will gracefully handle undefined values
   - Missing properties return empty strings
   - Invalid templates maintain original content

## Setup

```javascript
// Initialize the template engine
const templateEngine = new TemplateEngine();

// Process your template
const result = templateEngine.process(yourTemplate, yourData);

// Update the DOM
document.querySelector('#target').innerHTML = result;
```

## CSS Integration Example
```css
/* Your styles.css */
.project {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 4px;
}

.task {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

/* Add your own styles without conflicts */
```

## Notes
- The system is framework-agnostic
- No built-in styling or HTML structure is imposed
- All HTML structure and styling is controlled by your templates and CSS
- Supports deep nested objects and arrays
- Graceful error handling for missing data
