import { Card, CardHeader } from '@/components/ui/card';

type StatsCardsProps = {
 src: string;

};

function BookingInfo({ src}: StatsCardsProps) {
  return (
    <Card className='bg-muted'>
    <CardHeader className='flex flex-row justify-between items-center' >
  <h3 className="capitalize text-3xl font-bold"> {src} </h3>

    </CardHeader>
  </Card>
  )
}

export default BookingInfo