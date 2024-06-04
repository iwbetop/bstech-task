// Components
import { LayoutGrid } from "@/components/layout-grid"

export default function Page(){
    return(
        <div style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto"
        }} className="pt-5">
            <LayoutGrid />
        </div>
    )
}