import {
  Card,
  CardHeader,
  CardContent
} from "@/components/ui/card";
import { Loader } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaseReportSchema, type CaseReportType } from "@/lib/validation";
import {
  ClinicalExam,
  Demographics,
  PtHistory,
  Diagnostics,
  Introduction,
} from "@/components/case-reports";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useFieldArray, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

const bodySystems = [
  "General Exam",
  "Neurological Exam",
  "Cardiovascular Exam",
  "Respiratory Exam",
  "Gastroenterology Exam",
  "Head-Eyes-Ear-Nose-Throat Exam",
  "Musculoskeletal Exam",
  "Obs & Gynae Exam (non-females type normal findings)",
  "Genitourinary Exam",
  "Mental State Exam",
];

type ContextProps = {
  data: {
    data: {
      id: number;
      name: string;
    }[];
  }[];
  groups: {
    id: number;
    name: string;
  }[];
};

const CaseReport = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const { groups, data }: ContextProps = useOutletContext();

  const form = useForm({
    resolver: zodResolver(CaseReportSchema),
    defaultValues: {
      group: "public",
      interests: [],
      title: "",
      keyWords: "",
      abstract: "",
      introduction: "",
      name: "",
      age: Number("0"),
      gender: "",
      occupation: "",
      address: "",
      marriage: "",
      facility: "",
      facilityAddress: "",
      admissionDate: new Date(),
      complaints: "",
      currentMedicalHistory: "",
      medications: Array(2).fill({
        name: "",
        purpose: "",
        dosage: "",
        frequency: "",
      }),
      smoking: "no" as CaseReportType["smoking"],
      packYears: Number("0"),
      alcohol: "no" as CaseReportType["alcohol"],
      cageScore: Number("0"),
      substanceUse: "no" as CaseReportType["substanceUse"],
      substance: "",
      allergies: "",
      pastMedicalHistory: "",
      familyHistory: "",
      examDate: new Date(),
      vitals: Array(1).fill({
        temp: "",
        pulse: "",
        sats: "",
        bp: "",
        respRate: "",
      }),
      systemicExams: bodySystems.map((system) => ({
        system,
        finding: "normal findings",
      })),
      diagnostics: Array(2).fill({ name: "", findings: "" }),
      diagnosis: "",
      interventions: "",
      links: "",
      mediaIds: [],
    },
  });

  const medicationFields = useFieldArray({
    control: form.control,
    name: "medications",
  });

  const vitalFields = useFieldArray({
    control: form.control,
    name: "vitals",
  });

  const examFields = useFieldArray({
    control: form.control,
    name: "systemicExams",
  });

  const diagnosticFields = useFieldArray({
    control: form.control,
    name: "diagnostics",
  });

  const onSubmit = async (data: CaseReportType) => {
    console.log(data)
    const formValues = form.getValues();
    localStorage.setItem("case-report", JSON.stringify(formValues));
    setIsLoading(true);
    // try {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to submit case report");
    //   }

    //   const result = await response.json();
    //   console.log("Case report submitted successfully:", result);
    //   setIsLoading(false);
    //   setStep(1);
    //   form.reset();
    //   localStorage.removeItem("case-report");
    // } catch (error) {
    //   console.error("Error submitting case report:", error);
    //   setError("Failed to submit case report. Please try again.");
    //   setIsLoading(false);
    // }
  };

  const handleNextStep = useCallback(() => {
    const fieldsToValidate: string[] | undefined =
      {
        1: [
          "group",
          "interests",
          "title",
          "keyWords",
          "abstract",
          "introduction",
        ],
        2: [
          "name",
          "age",
          "gender",
          "occupation",
          "address",
          "marriage",
          "facility",
          "facilityAddress",
          "admissionDate",
        ],
        3: [
          "complaints",
          "currentMedicalHistory",
          "medications",
          "allergies",
          "pastMedicalHistory",
          "familyHistory",
          "smoking",
          "packYears",
          "alcohol",
          "cageScore",
          "substanceUse",
          "substance",
        ],
        4: ["examDate", "vitals", "systemicExams"],
        5: ["diagnostics", "diagnosis", "interventions", "links", "mediaIds"],
      }[step as keyof typeof fieldsToValidate] || [];

    form.trigger(fieldsToValidate).then((isValid) => {
      if (isValid) {
        const formValues = form.getValues();
        localStorage.setItem("case-report", JSON.stringify(formValues));
        setStep((prev) => Math.min(prev + 1, 5));
        setError("")
      } else {
        setError("Fill all forms before proceeding to next step");
      }
    });
  }, [form, step]);

  useEffect(() => {
    const savedData = localStorage.getItem("case-report");
    if (savedData) {
      form.reset(JSON.parse(savedData));
    }
  }, [form]);

  return (
    <Form {...form}>
      <Card className="h w-full px-2 md:px-8">
        <CardHeader>
          <div className="w-full justify-center border-b border-gray-400 py-1">
            <h2 className="text-center text-xl font-bold text-gray-800 dark:text-white">
              Full patient report
            </h2>
          </div>
        </CardHeader>
        <CardContent>
          <form 
          onSubmit={form.handleSubmit(onSubmit)}
          >
            {step === 1 && (
              <Introduction
                form={form}
                groups={groups}
                interests={data[2]?.data}
              />
            )}
            {step === 2 && <Demographics form={form} />}
            {step === 3 && (
              <PtHistory form={form} medicationFields={medicationFields} />
            )}
            {step === 4 && (
              <ClinicalExam
                form={form}
                vitalFields={vitalFields}
                examFields={examFields}
              />
            )}
            {step === 5 && (
              <Diagnostics
                form={form}
                diagnosticFields={diagnosticFields}
                isUploading={isUploading}
                setIsUploading={setIsUploading}
              />
            )}
       <div className="mt-8 flex flex-col gap-4">
         <p className="text-center font-semibold text-red-500">{error}</p>
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
            disabled={step === 1}
          >
            Previous
          </Button>

          {step < 5 && <Button type="button" onClick={() => handleNextStep()}>Next</Button>}
          {step === 5 && (
            <Button
              type="submit"
              className="whitespace-nowrap cursor-pointer hover:bg-gray-800"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex">
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Submitting.....
                </span>
              ) : (
                <span>Submit</span>
              )}
            </Button>
          )}
        </div>
       </div>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
};

export default CaseReport;
