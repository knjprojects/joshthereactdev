import React from 'react'
import { useRouter } from 'next/router';
type Props = {}

const Category = (props: Props) => {
  const router = useRouter();
  const { cat } = router.query;

  return (
    <div>{cat}</div>
  )
}

export default Category