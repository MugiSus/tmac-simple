export default async function getNTPOffset() {
  const requestSent = performance.now();
  const response = await fetch("https://worldtimeapi.org/api/ip");
  const data = await response.json();
  const ntp = new Date(data.datetime);
  const requestDuration = performance.now() - requestSent;

  return ntp.getTime() - Date.now() - requestDuration / 2;
}
