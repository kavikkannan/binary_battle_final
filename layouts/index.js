import Link from "next/link"

export const Layout = (props) => {
    return(
    <div>
        <Link href={`/rounds/round1`}></Link>
        <Link href={`/roround2`}></Link>
        <Link href={`/round3`}></Link>
        <Link href={`/Scoreboard`}></Link>
        <Link href={`/Login`}></Link>
    </div>
    );
}