import ClinicalsPageDetails from '@/components/ui/user-dashboard-pages/clinical-skills/ClinicalSkillDetails';
import React from 'react'

type Props = {
    params: {
        id: string
    }
}



export default function ClinicalsPage({ params: { id } }: Props) {

    return (
        <ClinicalsPageDetails />
        

    )
}
