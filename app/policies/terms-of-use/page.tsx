import PolicyHeader from '@/components/policies/PolicyHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of use',
};

const TermOfUsePage = () => {
  return (
    <div>
      <PolicyHeader title="Terms of use" />
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default TermOfUsePage;
