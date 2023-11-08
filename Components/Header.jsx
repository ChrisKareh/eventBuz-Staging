import Image from "next/image"
import mainLogo from '../assets/mainLogo.png'
import { useRouter } from "next/router"

const Header = () => {
	const router = useRouter()
	
	
    return (
	

	<div className="sticky-header">
	
	{/* Company Image */}
	<div className="mainLogo">
		<Image width={179} height={48} src={mainLogo} />
	</div>
	
	{/* Navigation Bar */}
	<section className="et-hero-tabs">
		
		<div className="et-hero-tabs-container">
			<a className="et-hero-tab" onClick={() => {router.push('/Home')}}> 
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
				<path d="M10.0554 1.73522C10.3107 1.49386 10.6487 1.35937 11 1.35938C11.3513 1.35937 11.6893 1.49386 11.9446 1.73522L18.6051 8.03135C19.0176 8.42047 19.25 8.9636 19.25 9.5301V17.1889C19.25 17.7359 19.0327 18.2605 18.6459 18.6473C18.2591 19.034 17.7345 19.2514 17.1875 19.2514H14.4375C14.1665 19.2514 13.8982 19.198 13.6479 19.0942C13.3976 18.9905 13.1701 18.8384 12.9786 18.6468C12.7871 18.4551 12.6352 18.2276 12.5316 17.9772C12.428 17.7268 12.3748 17.4584 12.375 17.1875V13.75C12.375 13.5676 12.3026 13.3928 12.1736 13.2638C12.0447 13.1349 11.8698 13.0625 11.6875 13.0625H10.3125C10.1302 13.0625 9.9553 13.1349 9.82636 13.2638C9.69743 13.3928 9.625 13.5676 9.625 13.75V17.1875C9.625 17.7345 9.4077 18.2591 9.02091 18.6459C8.63411 19.0327 8.10951 19.25 7.5625 19.25H4.8125C4.26549 19.25 3.74089 19.0327 3.35409 18.6459C2.9673 18.2591 2.75 17.7345 2.75 17.1875V9.52872C2.75 8.96222 2.98375 8.4191 3.39625 8.02997L10.0554 1.73247V1.73522ZM11 2.73347L4.3395 9.03097C4.27188 9.09507 4.218 9.17225 4.18113 9.25782C4.14426 9.34338 4.12516 9.43555 4.125 9.52872V17.1875C4.125 17.3698 4.19743 17.5447 4.32636 17.6736C4.4553 17.8025 4.63016 17.875 4.8125 17.875H7.5625C7.74484 17.875 7.9197 17.8025 8.04864 17.6736C8.17757 17.5447 8.25 17.3698 8.25 17.1875V13.75C8.25 13.203 8.4673 12.6784 8.85409 12.2916C9.24089 11.9048 9.76549 11.6875 10.3125 11.6875H11.6875C12.2345 11.6875 12.7591 11.9048 13.1459 12.2916C13.5327 12.6784 13.75 13.203 13.75 13.75V17.1875C13.75 17.3698 13.8224 17.5447 13.9514 17.6736C14.0803 17.8025 14.2552 17.875 14.4375 17.875H17.1875C17.3698 17.875 17.5447 17.8025 17.6736 17.6736C17.8026 17.5447 17.875 17.3698 17.875 17.1875V9.52872C17.875 9.43532 17.856 9.34289 17.8191 9.25707C17.7823 9.17126 17.7283 9.09386 17.6605 9.0296L11 2.73347Z" />
			</svg>HOME</a>
			<a className="et-hero-tab" href="#tab-flexbox">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M13.1111 0C13.8773 0 14.6121 0.304364 15.1539 0.846136C15.6956 1.38791 16 2.12271 16 2.88889V13.1111C16 13.8773 15.6956 14.6121 15.1539 15.1539C14.6121 15.6956 13.8773 16 13.1111 16H2.88889C2.12271 16 1.38791 15.6956 0.846136 15.1539C0.304364 14.6121 0 13.8773 0 13.1111V2.88889C0 2.12271 0.304364 1.38791 0.846136 0.846136C1.38791 0.304364 2.12271 0 2.88889 0H13.1111ZM14.6667 4.88889H1.33333V13.1111C1.33333 13.9698 2.03022 14.6667 2.88889 14.6667H13.1111C13.5237 14.6667 13.9193 14.5028 14.2111 14.2111C14.5028 13.9193 14.6667 13.5237 14.6667 13.1111V4.88889ZM4.22222 10.2222C4.51691 10.2222 4.79952 10.3393 5.0079 10.5477C5.21627 10.756 5.33333 11.0386 5.33333 11.3333C5.33333 11.628 5.21627 11.9106 5.0079 12.119C4.79952 12.3274 4.51691 12.4444 4.22222 12.4444C3.92754 12.4444 3.64492 12.3274 3.43655 12.119C3.22817 11.9106 3.11111 11.628 3.11111 11.3333C3.11111 11.0386 3.22817 10.756 3.43655 10.5477C3.64492 10.3393 3.92754 10.2222 4.22222 10.2222ZM8 10.2222C8.29469 10.2222 8.5773 10.3393 8.78567 10.5477C8.99405 10.756 9.11111 11.0386 9.11111 11.3333C9.11111 11.628 8.99405 11.9106 8.78567 12.119C8.5773 12.3274 8.29469 12.4444 8 12.4444C7.70532 12.4444 7.4227 12.3274 7.21433 12.119C7.00595 11.9106 6.88889 11.628 6.88889 11.3333C6.88889 11.0386 7.00595 10.756 7.21433 10.5477C7.4227 10.3393 7.70532 10.2222 8 10.2222ZM4.22222 6.66667C4.51691 6.66667 4.79952 6.78373 5.0079 6.9921C5.21627 7.20048 5.33333 7.48309 5.33333 7.77778C5.33333 8.07246 5.21627 8.35508 5.0079 8.56345C4.79952 8.77183 4.51691 8.88889 4.22222 8.88889C3.92754 8.88889 3.64492 8.77183 3.43655 8.56345C3.22817 8.35508 3.11111 8.07246 3.11111 7.77778C3.11111 7.48309 3.22817 7.20048 3.43655 6.9921C3.64492 6.78373 3.92754 6.66667 4.22222 6.66667ZM8 6.66667C8.29469 6.66667 8.5773 6.78373 8.78567 6.9921C8.99405 7.20048 9.11111 7.48309 9.11111 7.77778C9.11111 8.07246 8.99405 8.35508 8.78567 8.56345C8.5773 8.77183 8.29469 8.88889 8 8.88889C7.70532 8.88889 7.4227 8.77183 7.21433 8.56345C7.00595 8.35508 6.88889 8.07246 6.88889 7.77778C6.88889 7.48309 7.00595 7.20048 7.21433 6.9921C7.4227 6.78373 7.70532 6.66667 8 6.66667ZM11.7778 6.66667C12.0725 6.66667 12.3551 6.78373 12.5635 6.9921C12.7718 7.20048 12.8889 7.48309 12.8889 7.77778C12.8889 8.07246 12.7718 8.35508 12.5635 8.56345C12.3551 8.77183 12.0725 8.88889 11.7778 8.88889C11.4831 8.88889 11.2005 8.77183 10.9921 8.56345C10.7837 8.35508 10.6667 8.07246 10.6667 7.77778C10.6667 7.48309 10.7837 7.20048 10.9921 6.9921C11.2005 6.78373 11.4831 6.66667 11.7778 6.66667ZM13.1111 1.33333H2.88889C2.47633 1.33333 2.08067 1.49722 1.78895 1.78895C1.49722 2.08067 1.33333 2.47633 1.33333 2.88889V3.55556H14.6667V2.88889C14.6667 2.47633 14.5028 2.08067 14.2111 1.78895C13.9193 1.49722 13.5237 1.33333 13.1111 1.33333Z" />
			</svg> EVENTS</a>
			<a className="et-hero-tab" href="#tab-react"> <svg className="organizersLogo" viewBox="0 0 20 20">
				<path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
			</svg> ORGANIZERS</a>
			<a className="et-hero-tab" href="#tab-angular"> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
				<path fillRule="evenodd" clipRule="evenodd" d="M8.56961 1.03407C8.79194 0.905712 9.04414 0.838135 9.30087 0.838135C9.55759 0.838135 9.80979 0.905712 10.0321 1.03407L16.9268 5.01375C17.0129 5.0639 17.0931 5.12072 17.1658 5.18591C17.2511 5.20435 17.3315 5.24045 17.402 5.29186C17.4725 5.34328 17.5315 5.40888 17.5751 5.48445C17.6187 5.56002 17.646 5.64388 17.6552 5.73064C17.6645 5.8174 17.6555 5.90513 17.6288 5.9882C17.648 6.08263 17.658 6.18041 17.658 6.2807V9.0653C17.658 9.23154 17.592 9.39096 17.4744 9.50851C17.3569 9.62606 17.1975 9.69209 17.0312 9.69209C16.865 9.69209 16.7056 9.62606 16.588 9.50851C16.4705 9.39096 16.4045 9.23154 16.4045 9.0653V6.88409L9.92765 10.6231V19.1858C9.92772 19.2959 9.89881 19.404 9.84383 19.4994C9.78885 19.5947 9.70973 19.6739 9.61443 19.7289C9.51914 19.784 9.41102 19.813 9.30097 19.813C9.19091 19.813 9.08278 19.7841 8.98747 19.729L1.67495 15.507C1.45269 15.3787 1.26811 15.1941 1.13975 14.9719C1.0114 14.7496 0.943782 14.4975 0.943702 14.2409V6.27986C0.943702 6.18041 0.953731 6.08263 0.972952 5.98736C0.946252 5.9043 0.937236 5.81656 0.946484 5.72981C0.955732 5.64305 0.98304 5.55919 1.02665 5.48362C1.07026 5.40805 1.12921 5.34244 1.1997 5.29103C1.27019 5.23961 1.35066 5.20352 1.43594 5.18508C1.50965 5.12008 1.58973 5.06269 1.67495 5.01375L8.56961 1.03324V1.03407ZM2.19728 6.88241V14.2392C2.19728 14.3144 2.23739 14.383 2.30174 14.4197L8.67408 18.0986V10.6214L2.19728 6.88241ZM9.30087 9.53581L2.82406 5.79766L9.1964 2.11883C9.22816 2.1005 9.26419 2.09084 9.30087 2.09084C9.33754 2.09084 9.37357 2.1005 9.40533 2.11883L15.7777 5.79766L9.30087 9.53665V9.53581Z" />
				<path d="M18.7829 15.1241L16.3643 12.866C16.3011 12.8107 16.2497 12.7432 16.2131 12.6676C16.1765 12.592 16.1555 12.5099 16.1513 12.426C16.1471 12.3421 16.1597 12.2582 16.1886 12.1794C16.2174 12.1005 16.2618 12.0282 16.3191 11.9668C16.3764 11.9054 16.4454 11.8562 16.5222 11.822C16.5989 11.7878 16.6817 11.7694 16.7656 11.7678C16.8496 11.7662 16.933 11.7816 17.0109 11.8129C17.0889 11.8442 17.1597 11.8908 17.2193 11.9501L20.8011 15.2929C20.8639 15.3516 20.9139 15.4225 20.9481 15.5012C20.9823 15.58 21 15.665 21 15.7509C21 15.8368 20.9823 15.9218 20.9481 16.0005C20.9139 16.0793 20.8639 16.1502 20.8011 16.2089L17.2193 19.5517C17.1597 19.6109 17.0889 19.6576 17.0109 19.6889C16.933 19.7202 16.8496 19.7355 16.7656 19.734C16.6817 19.7324 16.5989 19.714 16.5222 19.6798C16.4454 19.6456 16.3764 19.5964 16.3191 19.535C16.2618 19.4736 16.2174 19.4013 16.1886 19.3224C16.1597 19.2435 16.1471 19.1597 16.1513 19.0758C16.1555 18.9919 16.1765 18.9098 16.2131 18.8342C16.2497 18.7586 16.3011 18.6911 16.3643 18.6358L18.7829 16.3777H13.2396C13.0733 16.3777 12.9139 16.3116 12.7964 16.1941C12.6788 16.0766 12.6128 15.9171 12.6128 15.7509C12.6128 15.5847 12.6788 15.4252 12.7964 15.3077C12.9139 15.1901 13.0733 15.1241 13.2396 15.1241H18.7829Z" />
			</svg>SUPPLIERS</a>
			<a className="et-hero-tab" href="#tab-other"> <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
				<g clipPath="url(#clip0_2847_75)">
				<path d="M7.77884 6.80055C8.19487 6.38305 8.47818 5.85112 8.59295 5.27205C8.70772 4.69298 8.64878 4.09276 8.4236 3.54729C8.19842 3.00183 7.81711 2.53561 7.32788 2.2076C6.83865 1.87959 6.26348 1.70452 5.67509 1.70452C5.08671 1.70452 4.51153 1.87959 4.0223 2.2076C3.53307 2.53561 3.15176 3.00183 2.92658 3.54729C2.7014 4.09276 2.64247 4.69298 2.75723 5.27205C2.872 5.85112 3.15531 6.38305 3.57134 6.80055L5.67509 8.91155L7.77884 6.80055ZM5.67509 11.3236L2.36859 8.00745C1.715 7.3513 1.26997 6.51542 1.08976 5.60549C0.909554 4.69556 1.00226 3.75245 1.35617 2.89539C1.71007 2.03833 2.30928 1.30581 3.07803 0.790442C3.84678 0.275073 4.75056 0 5.67509 0C6.59963 0 7.5034 0.275073 8.27215 0.790442C9.04091 1.30581 9.64011 2.03833 9.99402 2.89539C10.3479 3.75245 10.4406 4.69556 10.2604 5.60549C10.0802 6.51542 9.63518 7.3513 8.98159 8.00745L5.67509 11.3253V11.3236ZM5.67509 5.96895C5.33694 5.96895 5.01264 5.83416 4.77353 5.59422C4.53442 5.35429 4.40009 5.02887 4.40009 4.68955C4.40009 4.35024 4.53442 4.02482 4.77353 3.78489C5.01264 3.54495 5.33694 3.41016 5.67509 3.41016C6.01324 3.41016 6.33754 3.54495 6.57665 3.78489C6.81576 4.02482 6.95009 4.35024 6.95009 4.68955C6.95009 5.02887 6.81576 5.35429 6.57665 5.59422C6.33754 5.83416 6.01324 5.96895 5.67509 5.96895ZM13.3251 16.5879L15.4288 14.4769C15.8449 14.0594 16.1282 13.5275 16.2429 12.9484C16.3577 12.3693 16.2988 11.7691 16.0736 11.2237C15.8484 10.6782 15.4671 10.212 14.9779 9.88396C14.4886 9.55595 13.9135 9.38088 13.3251 9.38088C12.7367 9.38088 12.1615 9.55595 11.6723 9.88396C11.1831 10.212 10.8018 10.6782 10.5766 11.2237C10.3514 11.7691 10.2925 12.3693 10.4072 12.9484C10.522 13.5275 10.8053 14.0594 11.2213 14.4769L13.3251 16.5879ZM16.6316 15.6838L13.3251 19L10.0186 15.683C9.365 15.0268 8.91997 14.1909 8.73976 13.281C8.55955 12.3711 8.65226 11.428 9.00617 10.5709C9.36007 9.71384 9.95928 8.98132 10.728 8.46595C11.4968 7.95058 12.4006 7.67551 13.3251 7.67551C14.2496 7.67551 15.1534 7.95058 15.9222 8.46595C16.6909 8.98132 17.2901 9.71384 17.644 10.5709C17.9979 11.428 18.0906 12.3711 17.9104 13.281C17.7302 14.1909 17.2852 15.0268 16.6316 15.683V15.6838ZM13.3251 13.6453C12.9869 13.6453 12.6626 13.5105 12.4235 13.2706C12.1844 13.0307 12.0501 12.7052 12.0501 12.3659C12.0501 12.0266 12.1844 11.7012 12.4235 11.4612C12.6626 11.2213 12.9869 11.0865 13.3251 11.0865C13.6632 11.0865 13.9875 11.2213 14.2267 11.4612C14.4658 11.7012 14.6001 12.0266 14.6001 12.3659C14.6001 12.7052 14.4658 13.0307 14.2267 13.2706C13.9875 13.5105 13.6632 13.6453 13.3251 13.6453Z" />
				</g>
				<defs>
				<clipPath id="clip0_2847_75">
				<rect width="19" height="19" fill="white"/>
				</clipPath>

				</defs>
			</svg> PLACES</a>
			<span className="et-hero-tab-slider"></span>
		</div>

		{/* Search Button */}
		<button className="search">
  		<span>
    		<svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path></svg>
  		</span>	
	</button>

	<div className="rightSide">
			{/* Divider */}
		<hr className="Vertical" />

		

		{/* Globe Icon */}
		<span>
			<svg className="Globe" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
			<path d="M12.8927 5.94906C12.3372 2.62525 11.0268 0.291504 9.50191 0.291504C7.97701 0.291504 6.66667 2.62525 6.11111 5.94906H12.8927ZM5.82375 9.52225C5.82375 10.3486 5.86973 11.1414 5.95019 11.9044H13.0498C13.1303 11.1414 13.1762 10.3486 13.1762 9.52225C13.1762 8.69595 13.1303 7.90315 13.0498 7.14013H5.95019C5.86973 7.90315 5.82375 8.69595 5.82375 9.52225ZM18.2644 5.94906C17.1686 3.42177 14.9502 1.46768 12.2107 0.6786C13.1456 1.93666 13.7893 3.8312 14.1264 5.94906H18.2644ZM6.78927 0.6786C4.05364 1.46768 1.83142 3.42177 0.739464 5.94906H4.87739C5.21073 3.8312 5.85441 1.93666 6.78927 0.6786ZM18.6743 7.14013H14.2797C14.3602 7.92176 14.4061 8.72201 14.4061 9.52225C14.4061 10.3225 14.3602 11.1227 14.2797 11.9044H18.6705C18.8812 11.1414 19 10.3486 19 9.52225C19 8.69595 18.8812 7.90315 18.6743 7.14013ZM4.5977 9.52225C4.5977 8.72201 4.64368 7.92176 4.72414 7.14013H0.329502C0.122605 7.90315 0 8.69595 0 9.52225C0 10.3486 0.122605 11.1414 0.329502 11.9044H4.72031C4.64368 11.1227 4.5977 10.3225 4.5977 9.52225ZM6.11111 13.0954C6.66667 16.4193 7.97701 18.753 9.50191 18.753C11.0268 18.753 12.3372 16.4193 12.8927 13.0954H6.11111ZM12.2146 18.3659C14.9502 17.5768 17.1724 15.6227 18.2682 13.0954H14.1303C13.7931 15.2133 13.1494 17.1078 12.2146 18.3659ZM0.739464 13.0954C1.83525 15.6227 4.05364 17.5768 6.7931 18.3659C5.85824 17.1078 5.21456 15.2133 4.87739 13.0954H0.739464Z" fill="#A6ADB9"/>
		</svg>
		</span>

		<a className="countries" href="potato">Global</a>

		
		<hr className="Verticall"/>

		<button className="signupButton">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
			</svg>
			<div className="text">
				Sign Up
			</div>
		</button>

		<button onClick={()=> {
			router.push('/login');
		}} className="signinButton">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
			</svg>
			<div className="textt">
				Sign In
			</div>
		</button>

		

		

		
		

		
	</div>
	

	

		
	
	</section>


	<div className="nav__content">
			<ul className="nav__list">
				<li className="nav__list-item active-nav"><a href="#" className="hover-target">Home</a></li>
				<li className="nav__list-item"><a href="#" className="hover-target">Portfolio</a></li>
				<li className="nav__list-item"><a href="#" className="hover-target">Studio</a></li>
				<li className="nav__list-item"><a href="#" className="hover-target">News</a></li>
				<li className="nav__list-item"><a href="#" className="hover-target">Contact</a></li>
			</ul>
		</div>



        </div>
    )
}

export default Header