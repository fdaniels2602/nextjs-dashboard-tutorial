export default async function Page() {
    const res = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Invoices');
        }, 2000);
    });
    return <p>Invoices Page</p>
}