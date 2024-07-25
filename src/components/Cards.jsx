import React from 'react'

function Cards() {
  return (
    <>
    <div className="flex m-10 space-x-32  ">
    <div className="card card-compact w-96 dark:bg-white  light:bg-black shadow-xl hover:scale-105 duration-300 dark:border">
  <figure><img src="https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww m-20 h-20" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">How to Stop Worrying and Start Living</h2>
    <p>"How to Stop Worrying and Start Living: Time-Tested Methods for Conquering Worry"</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-600 btn to-white-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 dark:bg-white  light:bg-black shadow-xl hover:scale-105 duration-300 dark:border">
  <figure><img src="https://images.unsplash.com/photo-1621827979802-6d778e161b28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D m-20 h-20" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">The Subtle Art of Not Giving A F*ck</h2>
    <p>"The Subtle Art of Not Giving A F*ck : A Counterintuitive Approach To Living A Good Life"</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-600 btn to-white-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 dark:bg-white  light:bg-black shadow-xl hover:scale-105 duration-300 dark:border">
  <figure><img src="https://images.unsplash.com/photo-1629124096185-a773340e1574?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D m-20 h-20" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Play to Win</h2>
    <p>"Play to Win: 5 Principles to Succeed in Life and Business"</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-500 btn to-white-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards