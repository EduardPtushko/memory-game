import React from 'react';
import styled from 'styled-components';
import ProfileIcon from '../../../../common/components/ProfileIcon/ProfileIcon';
import { gray, cyanBlue } from '../../../../common/utilities';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../app/rootReducer';
import Hover from '../../../../common/components/Hover/Hover';

const Menu = (): JSX.Element => {
    const { token, username } = useSelector((state: AppState) => state.auth);

    return (
        <Hover>
            {({ hovering }): JSX.Element => (
                <Div>
                    {token !== null ? (
                        <>
                            <div>
                                <ProfileIcon fill='white' />
                            </div>
                            {hovering && (
                                <Dropdown>
                                    <span>{username}</span>
                                    <hr />
                                    <Link to='/results'>Results</Link>
                                    <hr />
                                    <Link to='/account/signout'>Sign out</Link>

                                    <div></div>
                                </Dropdown>
                            )}
                        </>
                    ) : (
                        <Link to='/account/signup'>Sign up</Link>
                    )}
                </Div>
            )}
        </Hover>
    );
};

const Div = styled.div`
    position: relative;
    margin-left: 1rem;

    & > div:first-of-type {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        letter-spacing: 1px;
        display: inline-block;
        transition: all 0.3s ease-out;
        padding: 2px 0;
        border-bottom: 1px solid transparent;

        &:link,
        &:visited {
            color: white;
        }

        &:hover {
            border-bottom: 1px solid white;
        }
    }
`;

const Dropdown = styled.div`
    min-width: 120px;
    text-align: center;
    background-color: white;
    color: ${cyanBlue};
    padding: 1rem;
    position: absolute;
    border-radius: 1px;
    top: 35px;
    right: -5px;
    z-index: 1;

    a {
        text-decoration: none;
        text-transform: lowercase;
        &:link,
        &:visited {
            color: ${gray};
        }
        &:hover {
            color: ${cyanBlue};
        }
    }

    & > div {
        width: 12px;
        height: 12px;
        position: absolute;
        top: -6px;
        transform: translateX(80px) rotateZ(45deg);
        background-color: white;
        border-radius: 1px;
    }
`;

export default Menu;
