import * as z from "zod";

const requiredString = z
  .string()
  .trim()
  .min(2, { message: "This field is required" });

const medicationSchema = z.object({
  name: requiredString,
  purpose: requiredString,
  dosage: requiredString,
  frequency: requiredString,
});

const diagnosticSchema = z.array(
  z.object({
    name: z.string().min(1, "name required"),
    finding: z
      .string()
      .min(1, "corresponding findings are required")
      .max(500, "Findings must be 500 characters or less"),
  })
);

const vitalsSchema = z.object({
  temp: requiredString,
  pulse: requiredString,
  sats: requiredString,
  bp: requiredString,
  respRate: requiredString,
});

const examSchema = z.array(
  z.object({
    system: z.string(),
    finding: z
      .string()
      .min(1, "Findings are required")
      .max(500, "Findings must be 500 characters or less"),
  })
);

export const CaseReportSchema = z
  .object({
    group: z.string().min(2, {
      message: "Please select group",
    }),
    interests: z
      .array(z.object({ value: z.number(), label: z.string() }))
      .min(2, {
        message: "Please select at least 2 interests",
      })
      .max(5, {
        message: "Please select at most 5 interests",
      }),
    title: requiredString,
    keyWords: requiredString,
    abstract: requiredString,
    introduction: requiredString,
    name: requiredString,
    age: z.preprocess((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return Number(value);
      }
      return value;
    }, z.number().nonnegative()),
    gender: requiredString,
    occupation: requiredString,
    address: requiredString,
    marriage: requiredString,
    facility: requiredString,
    facilityAddress: requiredString,
    admissionDate: z.date(),
    complaints: requiredString,
    currentMedicalHistory: requiredString,
    medications: z.array(medicationSchema).min(1).max(7),
    smoking: z.enum(["yes", "no", "occasionally"]),
    packYears: z.preprocess((value) => {
      return typeof value === "string" || typeof value === "number"
        ? Number(value)
        : value;
    }, z.number().nonnegative().optional()),
    alcohol: z.enum(["yes", "no", "occasionally"]),
    cageScore: z.preprocess((value) => {
      return typeof value === "string" || typeof value === "number"
        ? Number(value)
        : value;
    }, z.number().nonnegative().optional()),
    substanceUse: z.enum(["yes", "no", "occasionally"]),
    substance: z.string().optional(),
    allergies: requiredString,
    pastMedicalHistory: requiredString,
    familyHistory: z.string().optional(),
    examDate: z.date(),
    vitals: z.array(vitalsSchema).min(1).max(2),
    systemicExams: examSchema,
    diagnostics: diagnosticSchema,
    diagnosis: requiredString,
    interventions: requiredString,
    links: z.string().optional(),
    mediaIds: z.array(z.string()).optional(),
  })
  .superRefine((value, ctx) => {
    if (
      (value.smoking === "yes" || value.smoking === "occasionally") &&
      (value.packYears === undefined ||
        value.packYears === null ||
        value.packYears === 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "If smoking is 'yes' or 'occasionally', pack years are required.",
        path: ["packYears"],
      });
    }
    if (
      value.alcohol === "yes" &&
      (value.cageScore === undefined ||
        value.cageScore === null ||
        value.cageScore === 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "If alcohol use is 'yes', cage score required.",
        path: ["cageScore"],
      });
    }
    if (
      (value.substanceUse === "yes" || value.substanceUse === "occasionally") &&
      !value.substance
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "If substance use is 'yes' or 'occasionally', substance is required.",
        path: ["substance"],
      });
    }
  });

export type CaseReportType = z.infer<typeof CaseReportSchema>;
