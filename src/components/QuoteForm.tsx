
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  city: z.string().min(1, { message: 'Please select a city.' }),
  projectType: z.enum(['new-construction', 'renovation'], {
    required_error: 'Please select a project type.',
  }),
  area: z.string().min(1, { message: 'Please enter the built-up area.' }),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      city: '',
      projectType: 'new-construction',
      area: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    toast({
      title: "Quote request submitted!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    form.reset();
    setStep(1);
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (step === 1) fieldsToValidate = ['name', 'email', 'phone'];
    else if (step === 2) fieldsToValidate = ['city', 'projectType', 'area'];
    const result = await form.trigger(fieldsToValidate as any);
    if (result) setStep(step + 1);
  };

  const inputClass = "bg-[#111111] border-[#333333] text-[#FAFAFA] placeholder:text-[#555555] focus:border-[#5B8DEF] focus:ring-[#5B8DEF]/20";

  return (
    <div className="w-full max-w-lg mx-auto bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-[#222222]">
        <h2 className="text-xl font-display font-medium text-[#FAFAFA]">Request a Free Quote</h2>
        <p className="text-[#888888] text-sm mt-1">Fill out this form and our team will get back to you within 24 hours.</p>
      </div>

      <div className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#FAFAFA]">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className={inputClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#FAFAFA]">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} className={inputClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#FAFAFA]">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} className={inputClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#FAFAFA]">City</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select a city" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#111111] border-[#333333] text-[#FAFAFA]">
                          <SelectItem value="raipur">Raipur</SelectItem>
                          <SelectItem value="nagpur">Nagpur</SelectItem>
                          <SelectItem value="bhandara">Bhandara</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[#FAFAFA]">Project Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="new-construction" className="border-[#5B8DEF] text-[#5B8DEF]" />
                            </FormControl>
                            <FormLabel className="font-normal text-[#FAFAFA]">New Construction</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="renovation" className="border-[#5B8DEF] text-[#5B8DEF]" />
                            </FormControl>
                            <FormLabel className="font-normal text-[#FAFAFA]">Renovation</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#FAFAFA]">Built-up Area (sq ft)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 1500" {...field} className={inputClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 3 && (
              <>
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#FAFAFA]">Budget Range (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select a budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#111111] border-[#333333] text-[#FAFAFA]">
                          <SelectItem value="under-20-lakh">Under ₹20 lakh</SelectItem>
                          <SelectItem value="20-40-lakh">₹20-40 lakh</SelectItem>
                          <SelectItem value="40-60-lakh">₹40-60 lakh</SelectItem>
                          <SelectItem value="60-80-lakh">₹60-80 lakh</SelectItem>
                          <SelectItem value="80-lakh-1-crore">₹80 lakh - 1 crore</SelectItem>
                          <SelectItem value="above-1-crore">Above ₹1 crore</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#FAFAFA]">Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your project requirements..."
                          className={`resize-none ${inputClass}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </form>
        </Form>
      </div>

      {/* Step Indicator */}
      <div className="px-6 pb-2">
        <div className="flex items-center gap-1">
          <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[#5B8DEF]' : 'bg-[#222222]'}`}></div>
          <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[#5B8DEF]' : 'bg-[#222222]'}`}></div>
          <div className={`h-1 flex-1 rounded-full ${step >= 3 ? 'bg-[#5B8DEF]' : 'bg-[#222222]'}`}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className={`text-xs ${step >= 1 ? 'text-[#5B8DEF]' : 'text-[#555555]'}`}>Personal Details</span>
          <span className={`text-xs ${step >= 2 ? 'text-[#5B8DEF]' : 'text-[#555555]'}`}>Project Info</span>
          <span className={`text-xs ${step >= 3 ? 'text-[#5B8DEF]' : 'text-[#555555]'}`}>Additional Info</span>
        </div>
      </div>

      <div className="p-6 pt-4 flex justify-between border-t border-[#222222] mt-4">
        {step > 1 && (
          <button
            className="border border-[#333333] text-[#FAFAFA] px-4 py-2 rounded-lg hover:bg-[#222222] transition-colors"
            onClick={() => setStep(step - 1)}
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            className="ml-auto bg-[#5B8DEF] hover:bg-[#7AAAF5] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            onClick={nextStep}
          >
            Next
          </button>
        ) : (
          <button
            className="ml-auto bg-[#5B8DEF] hover:bg-[#7AAAF5] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            onClick={form.handleSubmit(onSubmit)}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
