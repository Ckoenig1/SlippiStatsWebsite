import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React from 'react'
import NextLink from "next/link";
import { useMeQuery , useLogoutMutation} from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { useRouter } from 'next/router';
import { Image } from "@chakra-ui/react";



interface NavBarProps {
    tab: number,
    visible: boolean
}

export const NavBar: React.FC<NavBarProps> = ({tab,visible}) => {
    if(visible){
        const router = useRouter();   
        const [{fetching: logoutFetching},logout] = useLogoutMutation();
        const [{data,fetching}] = useMeQuery();
        // pause: isServer() || !(window.location.pathname == "/"),
        let body = null
        let statIcons = null
        if(fetching){

        }else if(!data?.me){
            //user not logged in    `
            body = (
                <>
                    <NextLink href="/login">
                        <Link mr={2}>Login</Link>
                    </NextLink>
                    <NextLink href="/register">
                        <Link>Register</Link>
                    </NextLink>
                </>
            );
        }else{
            // user is logged
            let colorArray = ["black","black","black"]

            colorArray[tab] = "purple"

            body =(
                <Box>
                {data.me.username} 
                <Button 
                    variant="link"
                    onClick={() => {
                        logout();
                    }}
                    isLoading={logoutFetching}
                    ml = {2}
                    >
                        logout
                    </Button>
                </Box>
            );
            statIcons = (
                <Flex justify = "space-around">
                    <Button variant="link" flex="auto" width = '33%'
                    onClick={() => {
                        logout();
                    }}
                    isLoading={logoutFetching}
                    >
                            {/* <svg  height="25" viewBox="0 -30 512 512" width="100%" xmlns="http://www.w3.org/2000/svg" fill={"black"}><path d="m484.5 194.746094h-111.386719l1.550781-1.554688c3.304688-3.304687 5.125-7.699218 5.125-12.375 0-4.671875-1.820312-9.066406-5.125-12.371094l-7.746093-7.75c-3.304688-3.304687-7.699219-5.125-12.375-5.125s-9.070313 1.820313-12.375 5.125l-6.539063 6.539063-29.8125-33.347656 67.304688-60.171875c3.652344-3.265625 5.78125-7.949219 5.835937-12.851563l.394531-35.421875c.050782-4.75-1.765624-9.214844-5.125-12.570312-3.3125-3.3125-7.695312-5.128906-12.367187-5.128906-.070313 0-.136719.003906-.203125.003906l-35.421875.394531c-4.902344.054687-9.585937 2.183594-12.851563 5.835937l-57.382812 64.183594-57.382812-64.183594c-3.265626-3.65625-7.949219-5.78125-12.851563-5.835937l-35.421875-.398437c-4.761719-.003907-9.210938 1.769531-12.570312 5.125-3.355469 3.359374-5.175782 7.824218-5.125 12.570312l.394531 35.421875c.054687 4.902344 2.183593 9.585937 5.835937 12.855469l21.613282 19.320312c3.085937 2.761719 7.828124 2.492188 10.589843-.59375 2.761719-3.085937 2.496094-7.828125-.59375-10.589844l-21.613281-19.320312c-.519531-.46875-.824219-1.136719-.832031-1.835938l-.394531-35.425781c-.011719-.914062.453124-1.515625.730468-1.792969.277344-.277343.867188-.734374 1.765625-.734374h.03125l35.421875.398437c.703125.007813 1.371094.308594 1.835938.832031l137.574218 153.882813-22.246093 22.246093-106.589844-95.289062c-3.085937-2.757812-7.828125-2.492188-10.589844.59375-2.761719 3.089844-2.496093 7.832031.59375 10.589844l20.007813 17.890625-29.8125 33.347656-6.539063-6.539063c-6.824219-6.820312-17.925781-6.824218-24.75 0l-7.746093 7.75c-3.308594 3.304688-5.125 7.699219-5.125 12.371094 0 4.675782 1.816406 9.070313 5.125 12.375l1.550781 1.554688h-111.386719c-15.164062 0-27.5 12.335937-27.5 27.5v202.707031c0 15.164063 12.335938 27.5 27.5 27.5h457c15.164062 0 27.5-12.335937 27.5-27.5v-202.707031c0-15.164063-12.335938-27.5-27.5-27.5zm-159.933594-170.773438c.464844-.523437 1.132813-.824218 1.832032-.832031l35.425781-.398437h.027343c.898438 0 1.492188.457031 1.765626.734374.28125.277344.746093.878907.734374 1.792969l-.394531 35.425781c-.007812.699219-.3125 1.367188-.835937 1.835938l-67.304688 60.167969-29.757812-33.285157zm45.074219 256.121094 35.355469-35.355469c.636718-.636719 1.382812-.730469 1.769531-.730469s1.128906.09375 1.765625.730469l7.75 7.746094c.636719.636719.730469 1.382813.730469 1.769531 0 .386719-.09375 1.132813-.730469 1.769532l-35.355469 35.351562c-.976562.980469-2.5625.976562-3.535156.003906l-7.75-7.75c-.636719-.636718-.730469-1.382812-.730469-1.769531s.09375-1.128906.730469-1.765625zm2.59375-23.804688-30.332031-30.332031 8.957031-8.960937 30.332031 30.332031zm-19.460937-84.988281c.636718-.636719 1.382812-.730469 1.769531-.730469s1.128906.09375 1.765625.730469l7.75 7.75c.972656.976563.972656 2.558594 0 3.535157l-56.570313 56.566406c-.972656.976562-2.558593.976562-3.535156 0l-7.746094-7.746094c-.976562-.976562-.976562-2.5625 0-3.535156zm-78.511719 23.445313h-36.523438l18.261719-16.328125zm-56.894531-50.863282 27.378906 24.476563-35.507813 31.746094-22.246093-22.25zm-69.425782 35.167969 7.746094-7.746093c.488281-.488282 1.128906-.734376 1.769531-.734376s1.28125.246094 1.769531.734376l56.566407 56.566406c.976562.976562.976562 2.5625 0 3.535156l-7.746094 7.746094c-.976563.976562-2.5625.976562-3.539063 0l-56.566406-56.566406c-.972656-.976563-.972656-2.558594 0-3.535157zm-5.582031 101.042969c.972656.976562.972656 2.558594 0 3.535156l-7.75 7.746094c-.636719.640625-1.378906.734375-1.765625.734375-.390625 0-1.132812-.097656-1.769531-.734375l-35.355469-35.355469c-.636719-.636719-.730469-1.378906-.730469-1.765625 0-.386718.09375-1.132812.730469-1.769531l7.75-7.746094c.636719-.636719 1.378906-.734375 1.765625-.734375s1.128906.097656 1.769531.734375zm-11.550781-32.765625 30.332031-30.332031 8.957031 8.960937-30.332031 30.332031zm-115.808594-25.082031c0-6.894532 5.605469-12.5 12.5-12.5h10.019531c-1.925781 3.753906-3.019531 8-3.019531 12.5v171.707031c0 4.5 1.09375 8.746094 3.015625 12.5h-10.015625c-6.894531 0-12.5-5.605469-12.5-12.5zm469.5 215.207031h-457c-6.894531 0-12.5-5.605469-12.5-12.5v-6.515625c3.753906 1.921875 8 3.015625 12.5 3.015625h457c4.5 0 8.746094-1.09375 12.5-3.015625v6.515625c0 6.890625-5.605469 12.5-12.5 12.5zm12.5-43.5c0 6.894531-5.605469 12.5-12.5 12.5h-10.015625c1.921875-3.753906 3.015625-8 3.015625-12.5v-70.464844c0-4.140625-3.359375-7.5-7.5-7.5s-7.5 3.359375-7.5 7.5v70.464844c0 6.894531-5.605469 12.5-12.5 12.5h-388c-6.894531 0-12.5-5.605469-12.5-12.5v-171.707031c0-6.894532 5.605469-12.5 12.5-12.5h85.179688l-26.980469 26.976562-2.589844-2.59375c-6.824219-6.820312-17.925781-6.820312-24.75 0l-7.75 7.75c-3.304687 3.304688-5.125 7.699219-5.125 12.375 0 4.675782 1.820313 9.066406 5.125 12.375l35.355469 35.355469c3.304687 3.304687 7.699218 5.125 12.375 5.125 4.675781 0 9.070312-1.820313 12.375-5.125l7.75-7.75c6.820312-6.824219 6.820312-17.925781 0-24.75l-2.59375-2.589844 30.332031-30.332031 13.199219 13.199219c3.304687 3.304687 7.699218 5.125 12.375 5.125 4.671875 0 9.070312-1.820313 12.375-5.125l7.746094-7.746094c6.824218-6.824219 6.824218-17.929687 0-24.75l-6.535157-6.539063 1.097657-.980468h70.078124l1.097657.980468-6.535157 6.539063c-6.824218 6.820313-6.824218 17.925781 0 24.75l7.746094 7.746094c3.304688 3.304687 7.703125 5.125 12.375 5.125 4.675782 0 9.070313-1.820313 12.375-5.125l13.199219-13.199219 30.332031 30.332031-2.589844 2.59375c-3.308593 3.304688-5.128906 7.699219-5.128906 12.371094 0 4.675781 1.824219 9.070313 5.125 12.375l7.75 7.75c3.410156 3.410156 7.894532 5.117187 12.375 5.117187 4.480469 0 8.960938-1.707031 12.375-5.117187l35.355469-35.355469c3.304687-3.304687 5.125-7.699218 5.125-12.375 0-4.675781-1.820313-9.070312-5.125-12.375l-7.75-7.746094c-6.820313-6.824218-17.921875-6.824218-24.746094 0l-2.59375 2.589844-26.976562-26.976562h85.175781c6.894531 0 12.5 5.609375 12.5 12.5v66.722656c0 4.140625 3.359375 7.5 7.5 7.5s7.5-3.359375 7.5-7.5v-66.722656c0-4.5-1.09375-8.746094-3.019531-12.5h10.019531c6.894531 0 12.5 5.609375 12.5 12.5zm0 0"/><path d="m83.183594 13.941406 11.171875 6.671875c1.203125.71875 2.53125 1.058594 3.835937 1.058594 2.554688 0 5.042969-1.304687 6.449219-3.652344 2.121094-3.558593.960937-8.164062-2.597656-10.285156l-11.167969-6.667969c-3.558594-2.128906-8.164062-.964844-10.285156 2.59375-2.125 3.554688-.960938 8.160156 2.59375 10.28125zm0 0"/><path d="m94.355469 57.597656-11.171875 6.671875c-3.554688 2.121094-4.714844 6.726563-2.59375 10.28125 1.402344 2.351563 3.894531 3.65625 6.445312 3.65625 1.308594 0 2.636719-.339843 3.839844-1.0625l11.167969-6.667969c3.558593-2.121093 4.71875-6.726562 2.597656-10.285156-2.125-3.554687-6.730469-4.71875-10.285156-2.59375zm0 0"/><path d="m81.574219 46.605469h11.167969c4.144531 0 7.5-3.355469 7.5-7.5s-3.355469-7.5-7.5-7.5h-11.167969c-4.140625 0-7.5 3.355469-7.5 7.5s3.359375 7.5 7.5 7.5zm0 0"/><path d="m409.957031 70.476562 11.167969 6.671876c1.207031.71875 2.53125 1.058593 3.839844 1.058593 2.550781 0 5.042968-1.304687 6.445312-3.652343 2.125-3.558594.960938-8.164063-2.59375-10.285157l-11.171875-6.667969c-3.558593-2.128906-8.160156-.964843-10.285156 2.59375-2.121094 3.554688-.960937 8.160157 2.597656 10.28125zm0 0"/><path d="m413.808594 21.671875c1.308594 0 2.632812-.339844 3.835937-1.0625l11.171875-6.667969c3.554688-2.121094 4.714844-6.726562 2.59375-10.285156-2.125-3.554688-6.726562-4.71875-10.285156-2.59375l-11.167969 6.667969c-3.558593 2.125-4.71875 6.730469-2.597656 10.285156 1.40625 2.351563 3.894531 3.65625 6.449219 3.65625zm0 0"/><path d="m419.253906 31.605469c-4.140625 0-7.5 3.355469-7.5 7.5s3.359375 7.5 7.5 7.5h11.171875c4.140625 0 7.5-3.355469 7.5-7.5s-3.359375-7.5-7.5-7.5zm0 0"/><path d="m213.160156 328.933594h-120.988281c-9.648437 0-17.5 7.847656-17.5 17.5v15.839844c0 9.648437 7.851563 17.5 17.5 17.5h120.988281c9.652344 0 17.5-7.851563 17.5-17.5v-15.839844c0-9.652344-7.847656-17.5-17.5-17.5zm-123.488281 33.339844v-15.839844c0-1.378906 1.121094-2.5 2.5-2.5h36.40625v20.839844h-36.40625c-1.378906 0-2.5-1.121094-2.5-2.5zm125.988281 0c0 1.378906-1.121094 2.5-2.5 2.5h-69.582031v-20.839844h69.582031c1.378906 0 2.5 1.121094 2.5 2.5zm0 0"/><path d="m419.828125 328.933594h-66.566406c-4.140625 0-7.5 3.355468-7.5 7.5 0 4.140625 3.359375 7.5 7.5 7.5h26.984375v20.839844h-81.40625c-1.378906 0-2.5-1.121094-2.5-2.5v-15.839844c0-1.378906 1.121094-2.5 2.5-2.5h19.898437c4.144531 0 7.5-3.359375 7.5-7.5 0-4.144532-3.355469-7.5-7.5-7.5h-19.898437c-9.648438 0-17.5 7.851562-17.5 17.5v15.839844c0 9.648437 7.851562 17.5 17.5 17.5h120.988281c9.652344 0 17.5-7.851563 17.5-17.5v-15.839844c0-9.648438-7.851563-17.5-17.5-17.5zm2.5 33.339844c0 1.378906-1.121094 2.5-2.5 2.5h-24.582031v-20.839844h24.582031c1.378906 0 2.5 1.121094 2.5 2.5zm0 0"/></svg> */}
                            <svg height="25" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg" fill={colorArray[0]}><path d="m76 240c12.101562 0 23.054688-4.855469 31.148438-12.652344l44.402343 22.199219c-.222656 1.808594-.550781 3.585937-.550781 5.453125 0 24.8125 20.1875 45 45 45s45-20.1875 45-45c0-6.925781-1.703125-13.410156-4.511719-19.277344l60.234375-60.234375c5.867188 2.808594 12.351563 4.511719 19.277344 4.511719 24.8125 0 45-20.1875 45-45 0-4.671875-.917969-9.089844-2.246094-13.328125l52.335938-39.242187c7.140625 4.769531 15.699218 7.570312 24.910156 7.570312 24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45c0 4.671875.917969 9.089844 2.246094 13.328125l-52.335938 39.242187c-7.140625-4.769531-15.699218-7.570312-24.910156-7.570312-24.8125 0-45 20.1875-45 45 0 6.925781 1.703125 13.410156 4.511719 19.277344l-60.234375 60.234375c-5.867188-2.808594-12.351563-4.511719-19.277344-4.511719-12.101562 0-23.054688 4.855469-31.148438 12.652344l-44.402343-22.199219c.222656-1.808594.550781-3.585937.550781-5.453125 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45 20.1875 45 45 45zm0 0"/><path d="m497 482h-16v-317c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v317h-30v-227c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v227h-30v-107c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v107h-30v-167c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v167h-16c-8.289062 0-15 6.710938-15 15s6.710938 15 15 15h482c8.289062 0 15-6.710938 15-15s-6.710938-15-15-15zm0 0"/></svg>
                    </Button>
                    <Button variant="link" flex="auto" width = '33%'
                    onClick={() => {
                        logout();
                    }}
                    isLoading={logoutFetching}
                    >
                        
                        <svg  width="100%" height="25" viewBox="0 0 24 24" fill={colorArray[1]}><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.567 9.098c-.059-.058-.127-.108-.206-.138-.258-.101-1.35.603-1.515.256-.108-.231-.327.148-.578.008-.121-.067-.459-.52-.611-.465-.312.112.479.974.694 1.087.203-.154.86-.469 1.002-.039.271.812-.745 1.702-1.264 2.171-.775.702-.63-.454-1.159-.86-.277-.213-.274-.667-.555-.824-.125-.071-.7-.732-.694-.821l-.017.167c-.095.072-.297-.27-.319-.325 0 .298.485.772.646 1.011.273.409.42 1.005.756 1.339.179.18.866.923 1.045.908l.921-.437c.649.154-1.531 3.237-1.738 3.619-.171.321.139 1.112.114 1.49-.029.437-.374.579-.7.817-.35.255-.268.752-.562.934-.521.321-.897 1.366-1.639 1.361-.219-.001-1.151.364-1.273.007-.095-.258-.223-.455-.356-.71-.131-.25-.015-.51-.175-.731-.11-.154-.479-.502-.513-.684-.002-.157.118-.632.283-.715.231-.118.044-.462.016-.663-.048-.357-.27-.652-.535-.859-.393-.302-.189-.542-.098-.974 0-.206-.126-.476-.402-.396-.57.166-.396-.445-.812-.417-.299.021-.543.211-.821.295-.349.104-.707-.083-1.053-.126-1.421-.179-1.885-1.804-1.514-2.976.037-.192-.115-.547-.048-.696.159-.352.485-.752.768-1.021.16-.152.365-.113.553-.231.29-.182.294-.558.578-.789.404-.328.956-.321 1.482-.392.281-.037 1.35-.268 1.518-.06 0 .039.193.611-.019.578.438.023 1.061.756 1.476.585.213-.089.135-.744.573-.427.265.19 1.45.275 1.696.07.152-.125.236-.939.053-1.031.117.116-.618.125-.686.099-.122-.044-.235.115-.43.025.117.055-.651-.358-.22-.674-.181.132-.349-.037-.544.109-.135.109.062.181-.13.277-.305.155-.535-.53-.649-.607-.118-.077-1.024-.713-.777-.298l.797.793c-.04.026-.209-.289-.209-.059.053-.136.02.585-.105.35-.056-.09.091-.14.006-.271 0-.085-.23-.169-.275-.228-.126-.157-.462-.502-.644-.585-.05-.024-.771.088-.832.111-.071.099-.131.203-.181.314-.149.055-.29.127-.423.216l-.159.356c-.068.061-.772.294-.776.303.03-.076-.492-.172-.457-.324.038-.167.215-.687.169-.877-.048-.199 1.085.287 1.158-.238.029-.227.047-.492-.316-.531.069.008.702-.249.807-.364.148-.169.486-.447.731-.447.286 0 .225-.417.356-.622.133.053-.071.38.088.512-.01-.104.45.057.494.033.105-.056.691-.023.601-.299-.101-.28.052-.197.183-.255-.02.008.248-.458.363-.456-.104-.089-.398.112-.516.103-.308-.024-.177-.525-.061-.672.09-.116-.246-.258-.25-.036-.006.332-.314.633-.243 1.075.109.666-.743-.161-.816-.115-.283.172-.515-.216-.368-.449.149-.238.51-.226.659-.48.104-.179.227-.389.388-.524.541-.454.689-.091 1.229-.042.526.048.178.125.105.327-.07.192.289.261.413.1.071-.092.232-.326.301-.499.07-.175.578-.2.527-.365 2.72 1.148 4.827 3.465 5.694 6.318zm-11.113-3.779l.068-.087.073-.019c.042-.034.086-.118.151-.104.043.009.146.095.111.148-.037.054-.066-.049-.081.101-.018.169-.188.167-.313.222-.087.037-.175-.018-.09-.104l.088-.108-.007-.049zm.442.245c.046-.045.138-.008.151-.094.014-.084.078-.178-.008-.335-.022-.042.116-.082.051-.137l-.109.032s.155-.668.364-.366l-.089.103c.135.134.172.47.215.687.127.066.324.078.098.192.117-.02-.618.314-.715.178-.072-.083.317-.139.307-.173-.004-.011-.317-.02-.265-.087zm1.43-3.547l-.356.326c-.36.298-1.28.883-1.793.705-.524-.18-1.647.667-1.826.673-.067.003.002-.641.36-.689-.141.021.993-.575 1.185-.805.678-.146 1.381-.227 2.104-.227l.326.017zm-5.086 1.19c.07.082.278.092-.026.288-.183.11-.377.809-.548.809-.51.223-.542-.439-1.109.413-.078.115-.395.158-.644.236.685-.688 1.468-1.279 2.327-1.746zm-5.24 8.793c0-.541.055-1.068.139-1.586l.292.185c.113.135.113.719.169.911.139.482.484.751.748 1.19.155.261.414.923.332 1.197.109-.179 1.081.824 1.259 1.033.418.492.74 1.088.061 1.574-.219.158.334 1.14.049 1.382l-.365.094c-.225.138-.235.397-.166.631-1.562-1.765-2.518-4.076-2.518-6.611zm14.347-5.823c.083-.01-.107.167-.107.167.033.256.222.396.581.527.437.157.038.455-.213.385-.139-.039-.854-.255-.879.025 0 .167-.679.001-.573-.175.073-.119.05-.387.186-.562.193-.255.38-.116.386.032-.001.394.398-.373.619-.399z"/></svg>
                    </Button>
                    <Button variant="link" width = '33%' flex="auto"
                    onClick={() => {
                        logout();
                    }}
                    isLoading={logoutFetching}
                    >
                        <svg width='50%' height="25" min-width="46" viewBox="0 0 212 100" fill={colorArray[2]} > 
                            <g id="layer1">
                                <path
                                d="m 211.99653,60.953073 c 0,0 0,0 -210.8291108,0 24.1823398,35.08142 24.1823398,35.08142 24.1823398,35.08142"
                                id="path99" />
                                <path
                                d="m 1.1674179,60.953073 c 0,0 0,0 210.8291121,0 -24.18234,35.08142 -24.18234,35.08142 -24.18234,35.08142"
                                id="path99-0" />
                                <path
                                d="m 25.349759,96.034493 c 162.464431,0 162.464431,0 162.464431,0"
                                id="path429" />
                                <rect
                                id="rect1897"
                                width="56.315247"
                                height="9.7928047"
                                x="15.7041"
                                y="31.855196" />
                                <rect
                                id="rect1897-4"
                                width="56.315247"
                                height="9.7928047"
                                x="80.569588"
                                y="5.4388852" />
                                <rect
                                id="rect1897-1"
                                width="56.315247"
                                height="9.7928047"
                                x="144.23495"
                                y="31.897219" />
                            </g>
                        </svg>
                    <Image src="video-game.svg"></Image>
                    </Button>
                </Flex>
            )
            if(router.pathname !== "/overlay"){
                router.push("/overlay") 
            }
            
        }
            return (
                <Flex bg="#21ba45" p={4} justify="space-between">
                    <Box mr = {'auto'} width="25%" height="100%"> 
                        {statIcons}
                    </Box>
                    <Box ml={"auto"} >
                        {body}
                    </Box>
                </Flex>
            );
    }
    else{
        return null;
    }
}
