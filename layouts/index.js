import Link from "next/link"

export const Layout = (props) => {
    return(
    <div>
        <Link href={`/rounds/round1`}></Link>
        <Link href={`/rounds/round2`}></Link>
        <Link href={`/rounds/round3`}></Link>
        <Link href={`/Scoreboard`}></Link>
    </div>
    );
}