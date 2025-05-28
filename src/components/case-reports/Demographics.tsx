import type { UseFormReturn } from "react-hook-form"
import { CustomDatePicker, CustomFormField, CustomSelectForm } from "../customs"

type Item = {
    id: number
    name: string
}

type StepProps = {
    form: UseFormReturn<any>
}

const sexes: Item[] = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Others" },
]
const marriage: Item[] = [
    { id: 1, name: "Married" },
    { id: 2, name: "Divorced" },
    { id: 3, name: "Single" },
    { id: 4, name: "widowed" },
]

const Demographics = ({ form }: StepProps) => {
    return (
        <div className="relative space-y-4">
            <p className="bg-teal-200 p-1 text-center text-xl font-bold text-black">Patient and Facility details</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <CustomFormField
                    name="name"
                    control={form.control}
                    label="Patient's dummy name"
                    placeholder="Enter pt name"
                    type="text"
                />
                <CustomFormField name="age" control={form.control} label="Age" placeholder="0" type="number" />
                <CustomSelectForm
                    name="gender"
                    control={form.control}
                    items={sexes}
                    labelText="Gender"
                    placeholder="Select one"
                />
                <CustomFormField
                    name="occupation"
                    control={form.control}
                    label="Patient's occupation"
                    placeholder="occupation"
                    type="text"
                />
                <CustomFormField
                    name="address"
                    control={form.control}
                    label="Patient's Address"
                    placeholder="where patient lives"
                    type="text"
                />
                <CustomSelectForm
                    name="marriage"
                    control={form.control}
                    items={marriage}
                    labelText="Patient's marital status"
                    placeholder="Select one"
                />
                <CustomFormField
                    name="facility"
                    control={form.control}
                    label="Name of Health facility"
                    placeholder="type here"
                    type="text"
                />
                <CustomFormField
                    name="facilityAddress"
                    control={form.control}
                    label="Address of Health facility"
                    placeholder="district-county-village"
                    type="text"
                />
                <CustomDatePicker name="admissionDate" control={form.control} label="Date of admission(IPD)" />
            </div>
        </div>
    )
}

export default Demographics
