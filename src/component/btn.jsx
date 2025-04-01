export function Btn ({value, link}) {

    return (
        <a className="button-style bg-[#FFCC00] mx-auto px-5 py-2 m-5" href={link}>
            <span>{value}</span>
        </a>
    )
}