import { ReactNode, useEffect, useState } from 'react';
import HStack from '../../basicComponents/HStack';
import ListOfToDoLists from '../ListOfToDoLists/ListOfToDoLists';
import VStack from '../../basicComponents/VStack';
import NavBarProgres from '../NavBarProgress/NavBarProgres';

function LayoutProgress(props: { children: ReactNode }) {
    return (
        <>
            <VStack gap={4}>
                <NavBarProgres></NavBarProgres>
                <div className={'mainContent'}>
                    <HStack alignItems={'flex-start'} gap={32}>
                        <ListOfToDoLists></ListOfToDoLists>
                        {props.children}
                    </HStack>
                </div>
            </VStack>
        </>
    );
}

export default LayoutProgress;
