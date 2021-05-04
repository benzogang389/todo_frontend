import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Loader from 'shared/components/Loader/Loader';
import WrongFetch from 'shared/components/WrongFetch/WrongFetch';

import TicketsHeader from 'components/TicketsHeader/TicketsHeader';
import TicketsContent from 'components/TicketsContent/TicketsContent';

import { createNewTicket } from 'store/tickets/action';
import { RootState } from 'store/types';

import { FormikParamsNewTicket } from './types';

const TicketsContainer = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => state.tickets);

  const handleSumbit = async ({ text }: FormikParamsNewTicket) => {
    dispatch(createNewTicket({ text }));
  };

  const valSchemaTicketsHeader = yup.object({
    text: yup.string().required('Text is required').trim().max(100),
  });

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: valSchemaTicketsHeader,
    onSubmit: handleSumbit,
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <WrongFetch error={error} />;
  }

  return (
    <>
      <TicketsHeader formik={formik} />

      <TicketsContent />
    </>
  );
};

export default TicketsContainer;
