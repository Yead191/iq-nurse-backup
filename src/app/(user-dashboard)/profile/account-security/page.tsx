import AccountSecurity from '@/components/ui/user-dashboard-pages/user-profile-page/AccountSecurity/AccountSecurity';
import React, { Suspense } from 'react';

const AccountSecurityPage = () => {
    return (
        <div> 
            <Suspense >
            <AccountSecurity /> 
            </Suspense>
        </div>
    );
};

export default AccountSecurityPage;