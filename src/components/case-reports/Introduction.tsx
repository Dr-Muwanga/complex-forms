import type { UseFormReturn } from "react-hook-form"
import { CustomDropdown, CustomFormField, CustomSelectForm } from "../customs"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"

type Item = {
    id: number
    name: string
}

type StepProps = {
    form: UseFormReturn<any>
    groups: Item[]
    interests: Item[]
}

const Introduction = ({ form, groups, interests }: StepProps) => {
    return (
        <div className="space-y-4">
            <p className="bg-teal-200 p-1 text-center text-xl font-bold text-black">Introduction</p>
            <div className="flex w-full flex-col justify-between gap-3 sm:flex-row">
                <div className="w-full sm:w-[30%]">
                    <CustomSelectForm
                        name="group"
                        control={form.control}
                        items={groups}
                        labelText="Public or in a group?"
                        placeholder="Select one"
                    />
                </div>

                <div className="w-full sm:w-[60%]">
                    <CustomDropdown
                        name="interests"
                        label="select specialties most relevant to this case"
                        control={form.control}
                        options={interests}
                        placeholder="Tag this case "
                        className="max-w-full"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between gap-2">
                <CustomFormField
                    name="title"
                    control={form.control}
                    label="Case title"
                    placeholder="The diagnosis or intervention"
                    type="text"
                />
                <CustomFormField
                    name="keyWords"
                    control={form.control}
                    label="Case key words"
                    placeholder="2 to 5 words that identify diagnoses or interventions in this case report"
                    type="text"
                />
            </div>

            <FormField
                control={form.control}
                name="abstract"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="text-black dark:text-white">Abstract</FormLabel>
                            <h2>{form.watch("abstract")?.length}/3500</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={3500}
                                placeholder="What is unique about this case and what does it add to the scientific literature?"
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
                name="introduction"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="text-black dark:text-white">Introduction</FormLabel>
                            <h2>{form.watch("introduction")?.length}/3500</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={3500}
                                placeholder=" Briefly summarizes why this case is unique and may include medical literature references"
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

export default Introduction
