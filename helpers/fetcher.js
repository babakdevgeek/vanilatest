export async function fetchTemplate(address) {
  const res = await fetch(address);
  const text = await res.text();
  return text;
}
