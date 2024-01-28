import { PropsWithChildren } from "react";
import Button from "../../components/Button";
import { IPropertyData } from "./ProfileProperties.container";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import TextInput from "../../components/TextInput";

interface IProfileProps {
  data: IPropertyData[];
  redirectToBookings: () => void;
  redirectToProperties: () => void;
  onSubmit: (values: IPropertyData) => void;
  signout: () => void;
}

const ProfileProperties: React.FC<PropsWithChildren<IProfileProps>> = ({
  data,
  redirectToBookings,
  redirectToProperties,
  signout,
  onSubmit,
}) => {
  return (
    <div className="flex md:flex-col w-[80%] mx-auto gap-x-8 items-start">
      <div className="flex-[1_1_20%] md:w-full flex flex-col gap-y-4 p-8 shadow-[0_0_60px_-40px_#2e4e6e] rounded-[20px] items-center max-h-min">
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
      <div className="flex-[4_4_80%] flex flex-col gap-y-6">
        {data.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-[0_0_60px_-30px_#2e4e6e80] rounded-[20px] p-4 flex flex-row gap-y-4 justify-between rounded-[20px]"
          >
            <Formik
              initialValues={property}
              onSubmit={() => {
                console.log("test");
              }}
            >
              {({ values, handleChange, touched, errors }) => (
                <Form className="flex flex-col justify-center gap-y-2 w-full">
                  <div className="flex items-center md:flex-col">
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
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="surname"
                    >
                      Description
                    </label>
                    <TextInput
                      className="flex-1 w-full"
                      name="description"
                      type="text"
                      placeholder="description"
                      value={values.description || ""}
                      handleChange={handleChange}
                      error={errors.description}
                      touched={touched.description}
                    />
                  </div>
                  <div className="flex items-center md:flex-col">
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
                  <div className="flex items-center md:flex-col">
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
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="street"
                    >
                      Street
                    </label>
                    <TextInput
                      className="flex-1 w-full"
                      name="street"
                      type="text"
                      placeholder="street"
                      value={values.street || ""}
                      handleChange={handleChange}
                      error={errors.street}
                      touched={touched.street}
                    />
                  </div>
                  <div className="flex items-center md:flex-col">
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
                  <div className="flex items-center md:flex-col">
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
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="area"
                    >
                      Area
                    </label>
                    <TextInput
                      className="flex-1 w-full"
                      name="area"
                      type="number"
                      min={5}
                      placeholder="area"
                      value={values.area || ""}
                      handleChange={handleChange}
                      error={errors.area}
                      touched={touched.area}
                    />
                  </div>
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="rooms"
                    >
                      Rooms
                    </label>
                    <TextInput
                      className="flex-1 w-full"
                      name="rooms"
                      type="number"
                      min={1}
                      placeholder="rooms"
                      value={values.rooms || ""}
                      handleChange={handleChange}
                      error={errors.rooms}
                      touched={touched.rooms}
                    />
                  </div>
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="price"
                    >
                      Price
                    </label>
                    <TextInput
                      className="flex-1 w-full"
                      name="price"
                      type="number"
                      min={10}
                      placeholder="price"
                      value={values.price || ""}
                      handleChange={handleChange}
                      error={errors.price}
                      touched={touched.price}
                    />
                  </div>
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="amenities"
                    >
                      Amenities
                    </label>
                    <TextInput
                      className="flex-1 w-full"
                      name="amenities"
                      type="text"
                      placeholder="amenities"
                      value={values.amenities || ""}
                      handleChange={handleChange}
                      error={errors.amenities}
                      touched={touched.amenities}
                    />
                  </div>
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="imgs"
                    >
                      Images
                    </label>
                    <TextInput
                      className="flex-1 w-full"
                      name="imgs"
                      type="text"
                      placeholder="imgs"
                      value={values.imgs || ""}
                      handleChange={handleChange}
                      error={errors.imgs}
                      touched={touched.imgs}
                    />
                  </div>
                  <div className="flex items-center md:flex-col">
                    <label
                      className="flex-1"
                      for="phone"
                    >
                      Kitchen
                    </label>
                    <input
                      type="checkbox"
                      className="flex-1 w-full"
                      name="kitchen"
                      value={values.kitchen}
                      onChange={handleChange}
                      error={errors.kitchen}
                      touched={touched.kitchen}
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
        ))}
      </div>
    </div>
  );
};

export default ProfileProperties;
