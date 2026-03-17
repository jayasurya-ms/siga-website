import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import BASE_URL from "@/config/BaseUrl";
import { motion, AnimatePresence } from "framer-motion";
import bannerl from "../../assets/images/create-l.jpg";
import bannerm from "../../assets/images/create-m.WEBP";
import upi from "../../assets/images/siga-qr.jpg";

const PageHighlight = ({ children, className }) => {
  return (
    <span className={`relative inline-block font-semibold ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg px-2 py-1 -z-0 blur-sm"></span>
    </span>
  );
};

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col mt-20 h-[80vh]"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">
                Terms and Conditions
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-gray-700 space-y-4 custom-scroll">
              <div className="space-y-4">
                <p>
                  <strong>A)</strong> Booking opens on 15-03-2026 Desirous to
                  participate in 31st SIGA Fair submit the application duly
                  filled along with 50% payment by CHEQUE/RTGS/NEFT/UPI to block
                  space/stall.
                </p>
                <p>
                  <strong>B)</strong> The registration for participation in the
                  Fair will be considered only in the registration/application
                  form along with payment of 50% stall charges.
                </p>
                <p>
                  <strong>C)</strong> Application forms can be sent by courier
                  or scanned & send by e-mail:{" "}
                  <a
                    href="mailto:info.sigafair@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    info.sigafair@gmail.com
                  </a>{" "}
                  or you can submit it online.
                </p>
                <p>
                  <strong>D)</strong> It is important to send brand logo in CDR
                  & PDF FORMAT along with application.
                </p>
                <p>
                  <strong>E)</strong> Stall Rent, Advertisement, Fashion Show,
                  Branding, Membership Cheques must be issued separately & duly
                  attached with application form. (Outstation payment by NEFT or
                  RTGS only will be accepted.)
                </p>
                <p>
                  <strong>F)</strong> Participants are permitted to display the
                  brands manufactured by a single manufacturing company.
                  Multiple brands manufactured by various manufacturers will not
                  be permitted. Agents & Distributor of various brand has to
                  specify the brands to be display in the Stall.
                </p>
                <p>
                  <strong>G)</strong> The stall is to be used only for the
                  authorised purpose of Garment Fair. Participant is not allowed
                  to make direct sale of product in the stall. Authorised
                  purpose of Fair is B2B for display samples & book orders only.
                </p>
                <p>
                  <strong>H)</strong> In case of breach of any of the rules,
                  over and above the penalty provided for, the organising
                  committee reserves the right to cancel participation in this
                  fair by the defaulting participants without refund of the fees
                  paid by him. The participants may also be debarred from
                  participation in future fair organised by SIGA.
                </p>
                <p>
                  <strong>I)</strong> The decision of the organising committee
                  in respect of all aspects of the organisation of the fair will
                  be final and binding by all the participants.
                </p>
                <p>
                  <strong>J)</strong> Stall will be allotted On 5th July 2026,
                  4.00 pm at SIGA Office.
                </p>
                <p>
                  <strong>K)</strong> If for any unavoidable reasons the
                  participants have to be shifted Stall/Booths other than the
                  one allotted to him the Fair Committee will have every right
                  to do so. The participants are requested to co-operate under
                  such an eventuality.
                </p>
                <p>
                  <strong>L)</strong> The Fair Committee reserves the right to
                  refuse allotment of Stall to the participants without
                  assigning any reasons.
                </p>
                <p>
                  <strong>M)</strong> In the event of participant wanting to
                  cancel his participation in the Fair, amount equivalent to 50%
                  of the participation charges will be deducted and the balance
                  will be refunded after the Fair, If participant is not able to
                  participate and cancels on or after 5th July 2026, participant
                  will be liable to pay full charges. participation charges will
                  not be refunded to the participants.
                </p>
                <p>
                  <strong>N)</strong> Reserves the right to cancel bookings for
                  which payments are not received in time or case default the
                  payment terms.
                </p>
                <p>
                  <strong>O)</strong> On check out day winding-up & packing of
                  the display material will not be allowed to go out before 7.00
                  pm.
                </p>
                <p>
                  <strong>P)</strong> Participants are not permitted to keep
                  advertisement material in the corridor and out side of Stalls.
                  Violation may attract fine.
                </p>
                <p>
                  <strong>Q)</strong> SIGA Management can use Clothing & Brand
                  Logo of Participants for promotion of the Trade Event &
                  Fashion Show etc.
                </p>
                <p>
                  <strong>R)</strong> Display Materials like LED
                  Lamps/Stands/Hangers/Display Racks are available on rent
                  (subject to pre booking).
                </p>

                <div className="pt-4">
                  <h4 className="font-bold text-gray-900 border-b pb-2 mb-3">
                    Banners, Posters etc. Outside the Fair area
                  </h4>
                  <p>
                    No banners/posters/hoardings/kiosks and similar advertising
                    material shall be permitted in and out area of Fair Venue of
                    the Fair site in all directions and within the Fair area
                    itself. Except the official advertising spaces provided by
                    the Siga office. For your requirements for these advertising
                    space, kindly contact Siga office for further details.
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-gray-900 border-b pb-2 mb-3">
                    Insurance
                  </h4>
                  <p>
                    Insurance of the exhibits and the property of the cubicles
                    will be the responsibility of the individual exhibitor. The
                    organisers shall not be responsible in any way for personal
                    injury to the exhibitor or his staff, agents or licensees,
                    however caused.
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-gray-900 border-b pb-2 mb-3">
                    Consequential Loss
                  </h4>
                  <p>
                    In case of the Fair being cancelled, postponed or suspended
                    in whole or in part for causes not in the "Organisers"
                    control, the organisers will not accepted any consequent
                    liability or cancellation of participation in the Fair. In
                    such eventuality, loss/expenses incurred by the towards the
                    organisation of the Fair shall be shared amongst the
                    participants as decided by the Fair committee and shall be
                    final and binding on all participants.
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-gray-900 border-b pb-2 mb-3">
                    Badges
                  </h4>
                  <p>
                    Badges will be provided to the participant to allow them
                    entry into the Fair area. It is compulsory for the
                    participants and/or their representatives to wear these
                    badges at all times during the Fair hours, whether in the
                    stall or in the Fair area. Any participant found without the
                    badge displayed will be removed from the Fair area.
                    Participants are warned against the use of badges by any
                    persons other than themselves and their bona fide
                    representatives. In case any participant allows unauthorised
                    use of the badge, will be penal action as the Fair
                    Sub-Committee may decide.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <Button
                onClick={onClose}
                className="bg-[#314899] hover:bg-[#253775]"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const formSchema = z.object({
  name_of_firm: z.string().min(1, "Name of the exhibitor is required"),
  distributor_agent_address: z.string().min(1, "Full address is required"),
  brand_name: z.string().min(1, "Brand name is required"),
  product_description: z.string().optional(),
  rep1_name: z.string().min(1, "Contact person is required"),
  designation: z.string().optional(),
  rep1_mobile: z.string().min(10, "Mobile must be at least 10 digits"),
  profile_email: z.string().email("Invalid email address"),
  gst_no: z.string().min(1, "GSTN is required"),
  // Hidden fields with default values
  category_men: z.string().default("No"),
  category_women: z.string().default("No"),
  category_kids: z.string().default("No"),
  category_accessories: z.string().default("No"),
  fair_guide: z.string().default("No"),
  branding_at_venue: z.string().default("No"),
  fashion_show: z.string().default("No"),
  be_an_sponsor: z.string().default("No"),
  manufacturer_name: z.string().optional().default(""),
  distributor_agent_name: z.string().optional().default(""),
  rep2_name: z.string().optional().default(""),
  rep2_mobile: z.string().optional().default(""),
  profile_website: z.string().optional().default(""),
  stall_type: z.string().optional().default(""),
  profile_stall_size: z.string().optional().default(""),
  profile_stall_no: z.string().optional().default(""),
  profile_amount: z.string().optional().default(""),
  profile_payment: z.string().optional().default(""),
  profile_remark: z.string().optional().default(""),
  profile_new_stall_no: z.string().optional().default(""),
  profile_received_amt: z.string().optional().default(""),
  terms_accepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions to register",
  }),
});

const CreateParticipation = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_of_firm: "",
      distributor_agent_address: "",
      brand_name: "",
      product_description: "",
      rep1_name: "",
      designation: "",
      rep1_mobile: "",
      profile_email: "",
      gst_no: "",
      category_men: "No",
      category_women: "No",
      category_kids: "No",
      category_accessories: "No",
      fair_guide: "No",
      branding_at_venue: "No",
      fashion_show: "No",
      be_an_sponsor: "No",
      manufacturer_name: "",
      distributor_agent_name: "",
      rep2_name: "",
      rep2_mobile: "",
      profile_website: "",
      stall_type: "",
      profile_stall_size: "",
      profile_stall_no: "",
      profile_amount: "",
      profile_payment: "",
      profile_remark: "",
      profile_new_stall_no: "",
      profile_received_amt: "",
      terms_accepted: false,
    },
  });

  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const createParticipationMutation = useMutation({
    mutationFn: async (values) => {
      console.log("Submitting values to API:", values);
      const response = await axios.post(
        `${BASE_URL}/api/create-participant`,
        values,
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.code === "201" || data.status === "success") {
        toast.success("Participation created successfully!");
        form.reset();
      } else {
        toast.error(data.msg || "Something went wrong!");
      }
    },
    onError: (error) => {
      console.error("Mutation Error:", error);
      toast.error(
        error.response?.data?.message || "Failed to create participation",
      );
    },
  });

  const onSubmit = (values) => {
    createParticipationMutation.mutate(values);
  };

  const onInvalid = (errors) => {
    console.warn("Form Validation Errors:", errors);
    const firstErrorMessage =
      Object.values(errors)[0]?.message ||
      "Please fill all required fields correctly.";
    toast.error(firstErrorMessage);
  };

  return (
    <div className="relative w-full pt-28 pb-20 bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SIGA <PageHighlight>Participation</PageHighlight>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please fill the below Form.
          </p>
        </motion.div>

        <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-gray-100 shadow-2xl relative overflow-hidden">
          {/* Banner Space inside the card */}
          <div className="w-full h-[250px] md:h-[300px] rounded-xl mb-8 overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
              style={{ backgroundImage: `url(${bannerm})` }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
              style={{ backgroundImage: `url(${bannerl})` }}
            />
          </div>

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -tr-1/4 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 tr-1/4 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, onInvalid)}
              className="space-y-6"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name_of_firm"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Name of the exhibitor *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter exhibitor name"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="brand_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Brand Names *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter brand names"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="distributor_agent_address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Full Address *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter complete address"
                            {...field}
                            className="min-h-[120px] border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="product_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Product/Services details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter product or service details"
                            className="min-h-[120px] border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="rep1_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Contact person *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter contact name"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Designation
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter designation"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="rep1_mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Mobile No *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter 10-digit mobile number"
                            {...field}
                            maxLength={10}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="profile_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter email address"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="gst_no"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">
                        GSTN *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter GST number"
                          {...field}
                          className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <div className="md:col-span-1 mt-8">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="w-2 h-8 bg-[#314899] rounded-full mr-3"></span>
                    <div className="flex flex-col">
                      Bank Details
                      <p className="text-xs text-gray-500">
                        NEFT/RTGS/Cheque/UPI
                      </p>
                    </div>
                  </h3>
                </div>

                <div className="w-full h-full space-y-5 md:space-y-0 py-5 md:h-[250px] bg-gray-50/50 rounded-xl mb-8 flex flex-col md:flex-row! items-center justify-center border-2 border-dashed border-gray-200">
                  <div className="w-full md:w-1/2 h-full flex justify-center flex-row md:flex-col">
                    <ol
                      style={{ listStyleType: "disc" }}
                      className="ms-10 space-y-1 text-gray-700 font-medium"
                    >
                      <p className="font-bold -ms-5">
                        SOUTH INDIA GARMENT ASSOCIATION
                      </p>
                      <li>CANARA BANK, Shantinagar Branch, Bangalore</li>
                      <li>A/C NO: 0681201002725</li>
                      <li>IFSC: CNRB0000681</li>
                    </ol>
                  </div>
                  <div className="w-full md:w-1/2 h-ful flex justify-center items-center">
                    <img
                      src={upi}
                      alt="Qr Code"
                      className="size-40 md:size-50"
                    />
                    <p className="text-gray-700 font-medium text-center">
                      Scan QR Code to Make Advance Payment
                    </p>
                  </div>
                </div>

                {/* New Payment Details Section */}
                <div className="md:col-span-1 mt-8">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="w-2 h-8 bg-[#314899] rounded-full mr-3"></span>
                    Payment Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="profile_amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Amount (₹)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter amount"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="profile_payment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Payment Reference / TXN ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter transaction reference"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="profile_received_amt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Received Amount (₹)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter received amount"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="profile_remark"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Remarks
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter any remarks"
                            {...field}
                            className="border-gray-200 focus:border-[#314899] focus:ring-[#314899]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4">
                  <FormField
                    control={form.control}
                    name="terms_accepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border border-gray-100 bg-gray-50/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <p className="text-sm font-medium text-gray-700">
                            I agree to the{" "}
                            <button
                              type="button"
                              onClick={() => setIsTermsOpen(true)}
                              className="text-[#314899] hover:underline font-bold"
                            >
                              Terms and Conditions
                            </button>
                          </p>
                          <FormMessage className="text-red-500" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#314899] hover:bg-[#253775] text-white font-bold py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={createParticipationMutation.isPending}
                >
                  {createParticipationMutation.isPending
                    ? "Registering..."
                    : "Register Participation"}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <TermsModal
          isOpen={isTermsOpen}
          onClose={() => setIsTermsOpen(false)}
        />
      </div>
    </div>
  );
};

export default CreateParticipation;
