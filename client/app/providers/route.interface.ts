import { NextPage } from 'next'

export type TypesRoles = {
	isOnlyUser: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypesRoles

export type TypeComponentsAuthFields = {Component: TypesRoles}