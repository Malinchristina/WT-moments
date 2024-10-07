/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('renders NavBar', () => {
    render(
    <Router>
        <NavBar />
    </Router>
    );

    // screen.debug();
    const singInLink = screen.getByRole("link", {name: "Sign in"});
    expect(singInLink).toBeInTheDocument();
});

test('renders link to the user profiels for a logged in user', async () => {
    render(
    <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
    </Router>
    );

    const profileAvatar = await screen.findByText("Profile");
    expect(profileAvatar).toBeInTheDocument();
});

test('renders Sign in and Sign up buttons again on log out', async () => {
    render(
    <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
    </Router>
    );

    const singOutLink = await screen.findByRole("link", {name: "Sign out"});
    fireEvent.click(singOutLink);
    
    const singInLink = await screen.findByRole("link", {name: "Sign in"});
    const singUpLink = await screen.findByRole("link", {name: "Sign up"});
    
    expect(singInLink).toBeInTheDocument();
    expect(singUpLink).toBeInTheDocument();
});