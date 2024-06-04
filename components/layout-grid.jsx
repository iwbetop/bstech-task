"use client"

import {
    MDBRow, MDBCol
} from "mdb-react-ui-kit"

import { SideProfile } from "@/components/side-profile"
import { Content } from "@/components/content"

export function LayoutGrid(){
    return(
        <MDBRow className="py-3">
            <MDBCol md="3">
                <SideProfile />
            </MDBCol>
            <MDBCol md="9">
                <Content />
            </MDBCol>
        </MDBRow>
    )
}