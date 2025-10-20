"use client";
import { movingPackages } from "@/data/movingPackages";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormErrorMessage,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps } from "formik";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  moveType: string;
  fromAddress: string;
  toAddress: string;
  moveDate: string;
  moveTime: string;
  helpPackage: string;
  message: string;
}

export default function MovingForm() {
  const validateRequired = (value: string):string | undefined => (!value ? "Påkrævet felt" : undefined);

  return (
    <Box maxW="700px" mx="auto" mt={10}>
      <Formik <FormValues>
        initialValues={{
          name: "",
          phone: "",
          email: "",
          moveType: "",
          fromAddress: "",
          toAddress: "",
          moveDate: "",
          moveTime: "",
          helpPackage: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 800);
        }}
      >
        {(props) => (
          <Form>
            <VStack spacing={5} align="stretch">
              {/* Navn */}
              <Field name="name" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.name && form.touched.name)}>
                    <Input {...field} placeholder="Dit navn" bgColor="whiteAlpha.500" />
                    <FormErrorMessage>{form.errors.name as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Telefon */}
              <Field name="phone" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.phone && form.touched.phone)}>
                    <Input {...field} type="number" placeholder="Telefon" bgColor="whiteAlpha.500" />
                    <FormErrorMessage>{form.errors.phone as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Email (valgfri) */}
              <Field name="email">
                {({ field }:FieldProps) => (
                  <FormControl>
                    <Input {...field} type="email" placeholder="Din email" bgColor="whiteAlpha.500" />
                  </FormControl>
                )}
              </Field>

              {/* Flytningstype */}
              <Field name="moveType" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.moveType && form.touched.moveType)}>
                    <Select {...field} placeholder="Skal du flytte privat eller erhverv?" bgColor="whiteAlpha.500">
                      <option value="privat">Privat</option>
                      <option value="erhverv">Erhverv</option>
                    </Select>
                    <FormErrorMessage>{form.errors.moveType as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Fraflytningsadresse */}
              <Field name="fromAddress" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.fromAddress && form.touched.fromAddress)}>
                    <Input {...field} placeholder="Fraflytningsadresse og postnummer" bgColor="whiteAlpha.500" />
                    <FormErrorMessage>{form.errors.fromAddress as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Tilflytningsadresse */}
              <Field name="toAddress" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.toAddress && form.touched.toAddress)}>
                    <Input {...field} placeholder="Tilflytningsadresse og postnummer" bgColor="whiteAlpha.500" />
                    <FormErrorMessage>{form.errors.toAddress as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Dato */}
              <Field name="moveDate" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.moveDate && form.touched.moveDate)}>
                    <FormLabel>Ønsket fraflytningsdato</FormLabel>
                    <Input {...field} type="date" bgColor="whiteAlpha.500" />
                    <FormErrorMessage>{form.errors.moveDate as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Tidspunkt */}
              <Field name="moveTime" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.moveTime && form.touched.moveTime)}>
                    <FormLabel>Ønsket tidspunkt for flytning</FormLabel>
                    <Input {...field} type="time" bgColor="whiteAlpha.500" />
                    <FormErrorMessage>{form.errors.moveTime as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* Hjælpepakke (valgfri) */}
              <Field name="helpPackage">
                {({ field }:FieldProps) => (
                  <FormControl>
                    <Select {...field} placeholder="Hvor meget hjælp skal du bruge?" bgColor="whiteAlpha.500">
                      {movingPackages.map((p: {title: string, resource: string}, i) => (
                        <option key={i} value={p.title}>
                          {p.title}: {p.resource}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Field>

              {/* Besked */}
              <Field name="message" validate={validateRequired}>
                {({ field, form }:FieldProps) => (
                  <FormControl isRequired isInvalid={!!(form.errors.message && form.touched.message)}>
                    <Textarea {...field} rows={5} placeholder="Din besked" bgColor="whiteAlpha.500" />
                    <FormErrorMessage>{form.errors.message as string}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Flex justify="flex-end">
                <Button bg="secondary" color="white" isLoading={props.isSubmitting} type="submit">
                  Send besked
                </Button>
              </Flex>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
