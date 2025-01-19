export function sumTotalAmount(
  gcs: number, 
  ics: number, 
  rateStr: string | undefined
) : Array<{total: number; currency: 'GCS' | 'ICS'}> {
  const rate =  Number.parseFloat(rateStr || "0");
  const totalInGCS = gcs + ics * rate;
  const totalInICS = ics + gcs / rate;

  return [
    { total: totalInGCS, currency: 'GCS' }, 
    { total: totalInICS, currency: 'ICS' }
  ];
}
