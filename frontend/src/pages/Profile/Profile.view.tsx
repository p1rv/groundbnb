import { PropsWithChildren } from "react";
import Button from "../../components/Button";
import { IProfileData } from "./Profile.container";
import { Form, Formik } from "formik";
import TextInput from "../../components/TextInput";

interface IProfileProps {
  data: IProfileData;
  redirectToBookings: () => void;
  redirectToProperties: () => void;
  onSubmit: (values: Partial<IProfileData>) => void;
  signout: () => void;
}

const Profile: React.FC<PropsWithChildren<IProfileProps>> = ({ data, onSubmit, redirectToBookings, redirectToProperties, signout }) => {
  const { user, ...profile } = data;

  if (!data.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-[80%] mx-auto gap-x-8 items-start">
      <div className="flex-[1_1_20%] flex flex-col gap-y-4 p-8 shadow-[0_0_60px_-40px_#2e4e6e] rounded-[20px] items-center max-h-min">
        <Button
          className="w-full"
          onClick={redirectToBookings}
        >
          Bookings
        </Button>
        <Button
          className="w-full"
          onClick={redirectToProperties}
        >
          Properties
        </Button>
        <Button
          onClick={signout}
          fill
          className="w-full hover:bg-yellow hover:border-yellow hover:text-black"
        >
          Signout
        </Button>
      </div>
      <div className="flex-[4_4_80%] bg-white shadow-[0_0_60px_-40px_#2e4e6e] rounded-[20px] p-4 flex flex-col gap-y-4">
        <div className="flex">
          <div className="flex-1">Nick</div>
          <div className="flex-1">{user.nick}</div>
        </div>
        <div className="flex">
          <div className="flex-1">Email</div>
          <div className="flex-1">{user.email}</div>
        </div>
        <Formik
          initialValues={profile}
          onSubmit={onSubmit}
        >
          {({ values, handleChange, touched, errors }) => (
            <Form className="flex flex-col justify-center gap-y-2 w-full">
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="name"
                >
                  Name
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="name"
                  type="text"
                  placeholder="name"
                  value={values.name || ""}
                  handleChange={handleChange}
                  error={errors.name}
                  touched={touched.name}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="surname"
                >
                  Surname
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="surname"
                  type="text"
                  placeholder="surname"
                  value={values.surname || ""}
                  handleChange={handleChange}
                  error={errors.surname}
                  touched={touched.surname}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="dob"
                >
                  Date of birth
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="dob"
                  type="date"
                  placeholder="dob"
                  value={values.dob ? new Date(values.dob).toLocaleDateString("en-CA") : null}
                  handleChange={handleChange}
                  error={errors.dob}
                  touched={touched.dob}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="postal"
                >
                  Postal code
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="postal"
                  type="text"
                  placeholder="postal"
                  value={values.postal || ""}
                  handleChange={handleChange}
                  error={errors.postal}
                  touched={touched.postal}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="city"
                >
                  City
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="city"
                  type="text"
                  placeholder="city"
                  value={values.city || ""}
                  handleChange={handleChange}
                  error={errors.city}
                  touched={touched.city}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="building_no"
                >
                  Building number
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="building_no"
                  type="text"
                  placeholder="building_no"
                  value={values.building_no || ""}
                  handleChange={handleChange}
                  error={errors.building_no}
                  touched={touched.building_no}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="flat_no"
                >
                  Flat number
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="flat_no"
                  type="text"
                  placeholder="flat_no"
                  value={values.flat_no || ""}
                  handleChange={handleChange}
                  error={errors.flat_no}
                  touched={touched.flat_no}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="flex-1"
                  for="phone"
                >
                  Phone number
                </label>
                <TextInput
                  className="flex-1 w-full"
                  name="phone"
                  type="text"
                  placeholder="phone"
                  value={values.phone || ""}
                  handleChange={handleChange}
                  error={errors.phone}
                  touched={touched.phone}
                />
              </div>
              <Button
                type="submit"
                fill
                className="!w-full"
              >
                Update
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
