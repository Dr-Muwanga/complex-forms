# Case Reporting App

This project demonstrates how to build complex forms for collecting case report information using [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for schema validation.

## Features

- Dynamic, multi-step case report forms
- Type-safe validation with Zod
- Real-time error feedback
- Easy integration and customization

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/case-reporting.git
cd case-reporting
npm install
```

### Running the App

```bash
npm start
```

## Usage

The main form is implemented in `src/components/CaseReportForm.tsx`:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { caseReportSchema } from "../schemas/caseReportSchema";
import { z } from "zod";

type CaseReport = z.infer<typeof caseReportSchema>;

export function CaseReportForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<CaseReport>({
    resolver: zodResolver(caseReportSchema),
  });

  const onSubmit = (data: CaseReport) => {
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("patientName")} placeholder="Patient Name" />
      {errors.patientName && <span>{errors.patientName.message}</span>}
      {/* Add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Example Zod Schema

```ts
import { z } from "zod";

export const caseReportSchema = z.object({
  patientName: z.string().min(1, "Patient name is required"),
  age: z.number().min(0, "Age must be positive"),
  // Add more fields and validations as needed
});
```

## Customization

- Add or modify fields in the Zod schema and form component to match your case report requirements.
- Use React Hook Form's features for advanced form logic (conditional fields, arrays, etc).

## License

MIT