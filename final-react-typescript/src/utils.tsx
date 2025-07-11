export default function centsToDollars(priceCents: number): number {
    return Number((priceCents / 100).toFixed(2))
}