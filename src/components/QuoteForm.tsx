
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

const inputClass = "bg-[#1E1A16] border-[#2E2820] text-[#EDE8DE] placeholder:text-[#5A5249] focus:border-[#D4A843] focus:ring-[#D4A843]/20 rounded-none h-11";

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '', email: '', phone: '', city: '',
      projectType: 'new-construction', area: '', budget: '', message: '',
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

  const steps = ['Personal Details', 'Project Info', 'Additional Info'];

  return (
    <div className="w-full">
      {/* Step indicator */}
      <div className="flex items-center mb-8">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center gap-1">
              <div className={`w-7 h-7 flex items-center justify-center border font-mono text-xs transition-all duration-300 ${
                step > i + 1 ? 'bg-[#D4A843] border-[#D4A843] text-[#0D0B09]'
                : step === i + 1 ? 'border-[#D4A843] text-[#D4A843]'
                : 'border-[#2E2820] text-[#5A5249]'
              }`}>
                {step > i + 1 ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                ) : i + 1}
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-wider hidden sm:block ${
                step === i + 1 ? 'text-[#D4A843]' : 'text-[#5A5249]'
              }`}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 transition-all duration-300 ${step > i + 1 ? 'bg-[#D4A843]' : 'bg-[#2E2820]'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {step === 1 && (
            <>
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">Full Name</FormLabel>
                  <FormControl><Input placeholder="Enter your name" {...field} className={inputClass} /></FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">Email</FormLabel>
                  <FormControl><Input placeholder="you@example.com" type="email" {...field} className={inputClass} /></FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">Phone Number</FormLabel>
                  <FormControl><Input placeholder="Enter your phone number" {...field} className={inputClass} /></FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
            </>
          )}

          {step === 2 && (
            <>
              <FormField control={form.control} name="city" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">City</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={`${inputClass} w-full`}>
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#1E1A16] border-[#2E2820] text-[#EDE8DE] rounded-none">
                      {['Raipur', 'Nagpur', 'Bhandara', 'Other'].map((c) => (
                        <SelectItem key={c} value={c.toLowerCase()}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
              <FormField control={form.control} name="projectType" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">Project Type</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                      {[{ value: 'new-construction', label: 'New Construction' }, { value: 'renovation', label: 'Renovation' }].map((opt) => (
                        <FormItem key={opt.value} className="flex items-center gap-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={opt.value} className="border-[#D4A843] text-[#D4A843]" />
                          </FormControl>
                          <FormLabel className="font-normal text-[#7A7167] text-sm cursor-pointer">{opt.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
              <FormField control={form.control} name="area" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">Built-up Area (sq ft)</FormLabel>
                  <FormControl><Input placeholder="e.g., 1500" {...field} className={inputClass} /></FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
            </>
          )}

          {step === 3 && (
            <>
              <FormField control={form.control} name="budget" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">Budget Range (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={`${inputClass} w-full`}>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#1E1A16] border-[#2E2820] text-[#EDE8DE] rounded-none">
                      {[
                        { value: 'under-20-lakh', label: 'Under ₹20 lakh' },
                        { value: '20-40-lakh', label: '₹20–40 lakh' },
                        { value: '40-60-lakh', label: '₹40–60 lakh' },
                        { value: '60-80-lakh', label: '₹60–80 lakh' },
                        { value: '80-lakh-1-crore', label: '₹80 lakh – 1 crore' },
                        { value: 'above-1-crore', label: 'Above ₹1 crore' },
                      ].map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A7167] text-xs font-mono uppercase tracking-wider">Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your project..."
                      className={`resize-none ${inputClass} h-28`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )} />
            </>
          )}
        </form>
      </Form>

      {/* Nav buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-[#2E2820]">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="border border-[#2E2820] text-[#7A7167] px-6 py-3 text-xs font-mono uppercase tracking-wider hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
          >
            Back
          </button>
        ) : <div />}

        {step < 3 ? (
          <button
            onClick={nextStep}
            className="bg-[#D4A843] text-[#0D0B09] px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#E8C56A] transition-all"
          >
            Next
          </button>
        ) : (
          <button
            onClick={form.handleSubmit(onSubmit)}
            className="bg-[#D4A843] text-[#0D0B09] px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#E8C56A] transition-all"
          >
            Submit Request
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
