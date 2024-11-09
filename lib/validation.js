const validate = (data, schema) => {
  // console.log(data, schema);
  const schemaKeys = Object.keys(schema);
  for (const key of schemaKeys) {
    if (
      (key == "status" || key == "priority") &&
      !schema[key].enum?.includes(data[key])
    ) {
      // console.log(key, data[key]);
      throw new Error(
        `Invalid value for field: ${key}. Expected one of: ${schema[
          key
        ].enum?.join(", ")}`
      );
    }
    if (schema[key].required && !(key in data)) {
      throw new Error(`Missing required field: ${key}`);
    }
    if (key in data && typeof data[key] !== schema[key].type) {
      throw new Error(
        `Invalid type for field: ${key}. Expected ${schema[key].type}`
      );
    }
  }
  return true;
};

module.exports = validate;