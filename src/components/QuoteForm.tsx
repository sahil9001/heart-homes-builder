
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
    
    // Reset form after submission
    form.reset();
    setStep(1);
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ['name', 'email', 'phone'];
    } else if (step === 2) {
      fieldsToValidate = ['city', 'projectType', 'area'];
    }
    
    const result = await form.trigger(fieldsToValidate as any);
    if (result) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Request a Free Quote</CardTitle>
        <CardDescription>Fill out this form and our team will get back to you within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} />
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
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
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
                      <FormLabel>City</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a city" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
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
                      <FormLabel>Project Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="new-construction" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              New Construction
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="renovation" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Renovation
                            </FormLabel>
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
                      <FormLabel>Built-up Area (sq ft)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 1500" {...field} />
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
                      <FormLabel>Budget Range (Optional)</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
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
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your project requirements..."
                          className="resize-none"
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
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep}>
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button className="ml-auto" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button className="ml-auto bg-primary hover:bg-primary/90" onClick={form.handleSubmit(onSubmit)}>
            Submit
          </Button>
        )}
      </CardFooter>
      
      {/* Step Indicator */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className={`h-1 w-full rounded-l-full ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`h-1 w-full ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`h-1 w-full rounded-r-full ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className={`text-xs ${step >= 1 ? 'text-primary font-medium' : 'text-gray-500'}`}>Personal Details</span>
          <span className={`text-xs ${step >= 2 ? 'text-primary font-medium' : 'text-gray-500'}`}>Project Info</span>
          <span className={`text-xs ${step >= 3 ? 'text-primary font-medium' : 'text-gray-500'}`}>Additional Info</span>
        </div>
      </div>
    </Card>
  );
};

export default QuoteForm;
