export function initLocalTime(elementId: string, timeZone = 'Europe/Paris') {
	const timeEl = document.getElementById(elementId);
	if (!timeEl) return;

	function update() {
		const now = new Date();

		const time24 = new Intl.DateTimeFormat('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
			timeZone,
		}).format(now);

		const parts12 = new Intl.DateTimeFormat('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true,
			timeZone,
		}).formatToParts(now);
		const hour12 = parts12.find((p) => p.type === 'hour')?.value ?? '';
		const minute12 = parts12.find((p) => p.type === 'minute')?.value ?? '';
		const period = (parts12.find((p) => p.type === 'dayPeriod')?.value ?? '').toUpperCase();

		const offsetParts = new Intl.DateTimeFormat('en-US', {
			timeZone,
			timeZoneName: 'shortOffset',
		}).formatToParts(now);
		const offset = offsetParts.find((p) => p.type === 'timeZoneName')?.value ?? '';
		const tz = offset.includes('+2') ? 'CEST' : 'CET';

		timeEl!.textContent = `${time24}/${hour12}:${minute12}${period} ${tz}`;
	}

	update();
	setInterval(update, 30000);
}
