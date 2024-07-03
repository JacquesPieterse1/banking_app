import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {

  const loggedIn = { firstName: 'Jacques', lastName: "Pieterse", email: "jpieterse@gmail.com"};
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
            />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.00}]}/>
    </section>
  )
}

export default Home