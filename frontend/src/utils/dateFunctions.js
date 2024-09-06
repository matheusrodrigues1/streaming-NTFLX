export function formatReleaseDate(date) {
  return new Date(date).toLocaleDateString("pt-br", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
