/**
 * Template literal helper that converts HTML strings to DOM
 * @param {string} htmlString - HTML content as a string
 * @returns {Element} - Returns a single element, or wraps multiple elements in a div
 */
export function html(strings, ...values) {
  const template = document.createElement("template");
  const raw = strings.reduce((acc, str, i) =>
    acc + str + (values[i] ?? ""), ""
  );
  template.innerHTML = raw.trim();
  
  const children = template.content.children;
  
  // If there's only one element, return it directly
  if (children.length === 1) {
    return children[0];
  }
  
  // If there are multiple elements, wrap them in a div
  const wrapper = document.createElement("div");
  wrapper.append(...template.content.childNodes);
  return wrapper;
}

