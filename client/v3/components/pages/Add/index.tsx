import {
  Flex,
  Heading,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";
import { FC, useRef } from "react";
import { IconButton } from "../../common/IconButton";
import { useRouter } from "next/router";
import { ArrowEnterLeft } from "@emotion-icons/fluentui-system-filled";
import { Formik, Field, Form, FormikProps } from "formik";
import { object, string } from "yup";

export const AddComponent: FC<{}> = (): JSX.Element => {
  const router = useRouter(),
    ref = useRef(),
    gray = {
      "50_900": useColorModeValue("gray.50", "gray.900"),
      "900_50": useColorModeValue("gray.900", "gray.50"),
      "100_800": useColorModeValue("gray.100", "gray.800"),
    },
    cyan = {
      "400_500": useColorModeValue("cyan.400", "cyan.500"),
      "500_400": useColorModeValue("cyan.500", "cyan.400"),
    },
    red = {
      "400_500": useColorModeValue("red.400", "red.500"),
    };

  // bgColor: gray["50_900"],
  //     borderRadius: ".25rem",
  //     _focus: {
  //       boxShadow: "none",
  //       borderColor: cyan["400_500"],
  //       borderWidth: 2,
  //     },
  //     borderColor: gray["100_800"],
  //     _hover: {
  //       borderColor: cyan["500_400"],
  //     },
  //     _checked: {
  //       bgColor: cyan["400_500"],
  //       borderColor: cyan["400_500"],
  //     },

  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        published: "",
        is_completed: false,
      }}
      validationSchema={object().shape({
        title: string().required("Required"),
        author: string().required("Required"),
        published: string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }): void => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          // dispatch(createBookAct(values));
          resetForm();
          setSubmitting(false);
          router.push("/dashboard/shelf");
        }, 1000);
      }}
    >
      {({ isSubmitting }: FormikProps<any>): JSX.Element => (
        <Form>
          <Flex justifyContent="space-between" mb={8}>
            <Heading>Add book</Heading>

            <IconButton
              icon={<ArrowEnterLeft width={24} />}
              textProps={{ ml: 4 }}
              text="Submit"
              buttonProps={{
                shadow: "md",
                isLoading: isSubmitting,
                type: "submit",
                borderRadius: 12,
                bgColor: cyan["400_500"],
                _hover: {
                  bgColor: cyan["500_400"],
                  color: gray["50_900"],
                },
                _active: {
                  bgColor: cyan["500_400"],
                  color: gray["50_900"],
                },
              }}
            />
          </Flex>

          <Field name="title">
            {({ field, form }: any): JSX.Element => (
              <FormControl
                isRequired
                h={24}
                variant="floating"
                isInvalid={form.errors.title && form.touched.title}
              >
                <Input
                  borderColor={gray["100_800"]}
                  _hover={{
                    borderColor: cyan["500_400"],
                  }}
                  _focus={{
                    borderColor: cyan["400_500"],
                    borderWidth: 2,
                  }}
                  _invalid={{
                    borderColor: red["400_500"],
                    borderWidth: 2,
                  }}
                  borderWidth={2}
                  borderRadius={12}
                  {...field}
                  id="title"
                  placeholder=" "
                />

                <FormLabel htmlFor="title" bgColor={gray["50_900"]}>
                  Title
                </FormLabel>

                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="author">
            {({ field, form }: any): JSX.Element => (
              <FormControl
                isRequired
                h={24}
                variant="floating"
                isInvalid={form.errors.author && form.touched.author}
              >
                <Input
                  borderColor={gray["100_800"]}
                  _hover={{
                    borderColor: cyan["500_400"],
                  }}
                  _focus={{
                    borderColor: cyan["400_500"],
                    borderWidth: 2,
                  }}
                  _invalid={{
                    borderColor: red["400_500"],
                    borderWidth: 2,
                  }}
                  borderWidth={2}
                  borderRadius={12}
                  {...field}
                  id="author"
                  placeholder=" "
                />

                <FormLabel htmlFor="author" bgColor={gray["50_900"]}>
                  Author
                </FormLabel>

                <FormErrorMessage>{form.errors.author}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="published">
            {({ field, form }: any): JSX.Element => (
              <FormControl
                isRequired
                h={24}
                variant="floating"
                isInvalid={form.errors.published && form.touched.published}
              >
                <Input
                  borderColor={gray["100_800"]}
                  _hover={{
                    borderColor: cyan["500_400"],
                  }}
                  _focus={{
                    borderColor: cyan["400_500"],
                    borderWidth: 2,
                  }}
                  _invalid={{
                    borderColor: red["400_500"],
                    borderWidth: 2,
                  }}
                  borderWidth={2}
                  borderRadius={12}
                  id="published"
                  placeholder=" "
                  {...field}
                  ref={ref}
                  // onChange={(e) => console.log(e.target.value)}
                  onFocus={() => (ref.current.type = "month")}
                  onBlur={() => (ref.current.type = "text")}
                />

                <FormLabel htmlFor="published" bgColor={gray["50_900"]}>
                  Published
                </FormLabel>

                <FormErrorMessage>{form.errors.published}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="is_completed">
            {({ field }: any): JSX.Element => (
              <FormLabel htmlFor="is_completed" display="inline">
                <Checkbox {...field} id="is_completed">
                  Have you finished reading the book?
                </Checkbox>
              </FormLabel>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  );
};
