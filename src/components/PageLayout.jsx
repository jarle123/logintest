import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            {isAuthenticated ? (
                <span>is signed in</span>
            ) : (
                <SignInButton></SignInButton>
            )}
            {props.children}
        </>
    );
};
