import type { UseFormReturn, UseFieldArrayReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"
import { CustomOption, CustomFormField, CustomTableInputs } from "../customs"
import { Button } from "../ui/button"

type StepProps = {
    form: UseFormReturn<any>
    medicationFields: UseFieldArrayReturn<any, any>
}

const smoking = ["yes", "no", "occasionally"]
const PtHistory = ({ form, medicationFields }: StepProps) => {
    const { fields, append } = medicationFields
    return (
        <div className="space-y-8">
            <p className="bg-teal-200 p-1 text-center text-xl font-bold text-black">History</p>
            <FormField
                control={form.control}
                name="complaints"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="!text-black">Patient's chief complaints</FormLabel>
                            <h2>{form.watch("complaints")?.length}/8000</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={8000}
                                placeholder="Enter patient chief complaints......."
                                autoComplete="off"
                                className="h-36 rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="!text-red" />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="currentMedicalHistory"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="!text-black">Current Medical history</FormLabel>
                            <h2>{form.watch("currentMedicalHistory")?.length}/3000</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={3000}
                                placeholder="Enter patient current medical and surgical  history......."
                                autoComplete="off"
                                className="h-24 rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="!text-red" />
                    </FormItem>
                )}
            />

            <div className="rounded-md border border-gray-300 p-2">
                <CustomTableInputs
                    title="Current Medications"
                    fieldNames={["name", "purpose", "dosage", "frequency"]}
                    form={form}
                    arrayName="medications"
                    fieldArray={medicationFields}
                />
                <div className="flex items-center justify-center">
                    <Button
                        type="button"
                        variant="ghost"
                        className=""
                        onClick={() => append({ name: "", purpose: "", dosage: "", frequency: "" })}
                        disabled={fields.length >= 7}
                    >
                        Add field
                    </Button>
                </div>
            </div>

            <div className="flex w-full flex-col gap-3 rounded-md border p-2">
                <CustomOption
                    options={smoking}
                    label="Does the patient smoke or ever smoked?"
                    name="smoking"
                    control={form.control}
                />

                <CustomFormField
                    name="packYears"
                    control={form.control}
                    label="If yes, Pack years"
                    placeholder="pack-years"
                    type="number"
                />
            </div>
            <div className="flex w-full flex-col gap-3 rounded-md border p-2">
                <CustomOption
                    options={smoking}
                    label="Does the patient drink alcohol or ever drunk alcohol?"
                    name="alcohol"
                    control={form.control}
                />

                <CustomFormField
                    name="cageScore"
                    control={form.control}
                    label="If yes, what is the cage score?"
                    placeholder="cage score (C.A.G.E)"
                    type="number"
                />
            </div>
            <div className="flex w-full flex-col gap-3 rounded-md border p-2">
                <CustomOption
                    options={smoking}
                    label="Any dependency drug (Substance Abuse)?"
                    name="substanceUse"
                    control={form.control}
                />

                <CustomFormField
                    name="substance"
                    control={form.control}
                    label="If yes, which drugs?"
                    placeholder="enter here..."
                    type="text"
                />
            </div>
            <FormField
                control={form.control}
                name="allergies"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="!text-black">Allergies</FormLabel>
                            <h2>{form.watch("allergies")?.length}/1000</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={1000}
                                placeholder="does the patient have any allergies?"
                                autoComplete="off"
                                className="h-20 rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="!text-red" />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="pastMedicalHistory"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="!text-black">Past Medical history</FormLabel>
                            <h2>{form.watch("pastMedicalHistory")?.length}/3000</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={3000}
                                placeholder="Enter patient past medical and surgical  history......."
                                autoComplete="off"
                                className="h-24 rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="!text-red" />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="familyHistory"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="!text-black">Family history - List down if any</FormLabel>
                            <h2>{form.watch("familyHistory")?.length}/3000</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={3000}
                                placeholder="Type here...."
                                autoComplete="off"
                                className="h-24 rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="!text-red" />
                    </FormItem>
                )}
            />
        </div>
    )
}

export default PtHistory
