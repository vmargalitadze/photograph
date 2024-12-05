'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from './types';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  // Update to use `useActionState` instead of `useFormState`
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
