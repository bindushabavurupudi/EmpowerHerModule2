import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  })

  const [submittedData, setSubmittedData] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    setSubmittedData(form)
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <Textarea
          placeholder="Your Feedback"
          name="feedback"
          value={form.feedback}
          onChange={handleChange}
        />

        <Button onClick={handleSubmit}>Submit</Button>

        {submittedData && (
          <div className="mt-4 text-sm">
            <p><b>Name:</b> {submittedData.name}</p>
            <p><b>Email:</b> {submittedData.email}</p>
            <p><b>Feedback:</b> {submittedData.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default FeedbackForm
