import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Select,
  Grid,
  FileInput,
  Image,
  Group,
  Notification,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

export default function StudentRegister() {
  // 🔥 Hook: show success message
  const [visible, { open, close }] = useDisclosure(false);

  // 🔥 Hook: image preview
  const [preview, setPreview] = useState(null);

  // 🔥 Form Hook (validation + state)
  const form = useForm({
    initialValues: {
      firstNm: "",
      lastNm: "",
      gender: "",
      dob: null,
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      country: "",
      pin: "",
      emailId: "",
      mobileNum: "",
      password: "",
      emergencyContactNm: "",
      emergencyContactNum: "",
      profile_img: null,
    },

    validate: {
      firstNm: (v) => (v.length < 2 ? "First name too short" : null),
      emailId: (v) =>
        /^\S+@\S+$/.test(v) ? null : "Invalid email",
      mobileNum: (v) =>
        v.length === 10 ? null : "Enter valid number",
      password: (v) =>
        v.length < 6 ? "Password must be 6+ chars" : null,
    },
  });

  // 🔥 Handle Image Preview
  const handleImage = (file) => {
    form.setFieldValue("profile_img", file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔥 Submit
  const handleSubmit = (values) => {
    console.log(values);
    open();
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto" }}>
      <h2>Student Registration</h2>

      {/* 🔥 Notification */}
      {visible && (
        <Notification color="green" onClose={close}>
          Registered Successfully!
        </Notification>
      )}

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          
          {/* Names */}
          <Grid.Col span={6}>
            <TextInput label="First Name" {...form.getInputProps("firstNm")} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Last Name" {...form.getInputProps("lastNm")} />
          </Grid.Col>

          {/* Gender + DOB */}
          <Grid.Col span={6}>
            <Select
              label="Gender"
              data={["Male", "Female", "Other"]}
              {...form.getInputProps("gender")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <DateInput label="DOB" {...form.getInputProps("dob")} />
          </Grid.Col>

          {/* Address */}
          <Grid.Col span={12}>
            <TextInput label="Address Line 1" {...form.getInputProps("addr1")} />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Address Line 2" {...form.getInputProps("addr2")} />
          </Grid.Col>

          {/* Location */}
          <Grid.Col span={4}>
            <TextInput label="City" {...form.getInputProps("city")} />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput label="State" {...form.getInputProps("state")} />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput label="Country" {...form.getInputProps("country")} />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextInput label="PIN Code" {...form.getInputProps("pin")} />
          </Grid.Col>

          {/* Contact */}
          <Grid.Col span={6}>
            <TextInput label="Email" {...form.getInputProps("emailId")} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Mobile" {...form.getInputProps("mobileNum")} />
          </Grid.Col>

          {/* Password */}
          <Grid.Col span={6}>
            <PasswordInput label="Password" {...form.getInputProps("password")} />
          </Grid.Col>

          {/* Emergency */}
          <Grid.Col span={6}>
            <TextInput
              label="Emergency Contact Name"
              {...form.getInputProps("emergencyContactNm")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Emergency Contact Number"
              {...form.getInputProps("emergencyContactNum")}
            />
          </Grid.Col>

          {/* File Upload */}
          <Grid.Col span={6}>
            <FileInput label="Profile Image" onChange={handleImage} />
          </Grid.Col>

          {/* Image Preview */}
          <Grid.Col span={6}>
            {preview && (
              <Image src={preview} alt="Preview" width={120} />
            )}
          </Grid.Col>

          {/* Submit */}
          <Grid.Col span={12}>
            <Group position="center">
              <Button type="submit">Register</Button>
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  );
}