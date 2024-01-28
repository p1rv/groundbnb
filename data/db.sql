--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-0ubuntu0.23.10.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: amenities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.amenities (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public.amenities OWNER TO postgres;

--
-- Name: amenities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.amenities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.amenities_id_seq OWNER TO postgres;

--
-- Name: amenities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.amenities_id_seq OWNED BY public.amenities.id;


--
-- Name: bookings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bookings (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "propertyId" integer NOT NULL,
    check_in date NOT NULL,
    check_out date NOT NULL,
    total_price double precision NOT NULL,
    status integer NOT NULL
);


ALTER TABLE public.bookings OWNER TO postgres;

--
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bookings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bookings_id_seq OWNER TO postgres;

--
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profiles (
    id integer NOT NULL,
    name character varying(127) NOT NULL,
    surname character varying(127) NOT NULL,
    dob date NOT NULL,
    postal character varying(10) NOT NULL,
    city character varying(63) NOT NULL,
    street character varying(127),
    building_no character varying(12) NOT NULL,
    flat_no character varying(12),
    phone character varying(15)
);


ALTER TABLE public.profiles OWNER TO postgres;

--
-- Name: properties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.properties (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    name character varying(63) NOT NULL,
    description text NOT NULL,
    postal character varying(10) NOT NULL,
    city character varying(63) NOT NULL,
    street character varying(127),
    building_no character varying(12) NOT NULL,
    flat_no character varying(12),
    rooms integer NOT NULL,
    area double precision NOT NULL,
    kitchen boolean NOT NULL,
    imgs text[] NOT NULL,
    price double precision NOT NULL
);


ALTER TABLE public.properties OWNER TO postgres;

--
-- Name: properties_amenities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.properties_amenities (
    "propertyId" integer NOT NULL,
    "amenityId" integer NOT NULL
);


ALTER TABLE public.properties_amenities OWNER TO postgres;

--
-- Name: properties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.properties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.properties_id_seq OWNER TO postgres;

--
-- Name: properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.properties_id_seq OWNED BY public.properties.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "propertyId" integer NOT NULL,
    rating integer NOT NULL,
    content text,
    submitted date NOT NULL
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role integer NOT NULL,
    nick character varying(15) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_profiles_id_seq OWNER TO postgres;

--
-- Name: users_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_profiles_id_seq OWNED BY public.profiles.id;


--
-- Name: amenities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amenities ALTER COLUMN id SET DEFAULT nextval('public.amenities_id_seq'::regclass);


--
-- Name: bookings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings ALTER COLUMN id SET DEFAULT nextval('public.bookings_id_seq'::regclass);


--
-- Name: profiles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles ALTER COLUMN id SET DEFAULT nextval('public.users_profiles_id_seq'::regclass);


--
-- Name: properties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties ALTER COLUMN id SET DEFAULT nextval('public.properties_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: amenities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.amenities (id, name) FROM stdin;
3	Free parking
4	A hot tub
5	Air conditioning
6	A washer
7	Self check-in
8	TV
9	A fireplace
10	Wi-Fi
\.


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bookings (id, "userId", "propertyId", check_in, check_out, total_price, status) FROM stdin;
1	1	2	2024-01-01	2024-01-05	350	3
2	2	3	2024-03-10	2024-03-15	500	2
3	3	1	2024-04-20	2024-04-25	700	1
4	1	5	2024-01-29	2024-01-31	1414	0
5	1	5	2024-02-01	2024-02-03	2828	0
6	1	2	2024-01-31	2024-02-04	3636	0
7	1	1	2024-02-13	2024-02-20	19796	0
8	1	1	2024-02-01	2024-02-04	4848	0
9	1	1	2024-01-29	2024-01-30	1212	0
10	1	7	2024-02-03	2024-02-04	707	0
\.


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profiles (id, name, surname, dob, postal, city, street, building_no, flat_no, phone) FROM stdin;
2	Maciej	Kowalski	2001-07-31	00-460	Warszawa	Aleje Jerozolimskie	18b	75	64924472
3	Tomasz	Zborowski	1996-01-27	61-030	Wrocław	Modlińska	58	10c	985273445
1	Karol	Król	2000-05-14	30-010	Kraków	Augustynka-Wichury	123	17	884924672
\.


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.properties (id, "userId", name, description, postal, city, street, building_no, flat_no, rooms, area, kitchen, imgs, price) FROM stdin;
6	2	Modern Loft	Stylish loft with a view.	54321	Another City	High Street	18	B3	1	60	t	{"https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment"}	200
7	3	Spacious House	Large house with a garden.	67890	Yet Another City	Green Avenue	7	C2	4	120	t	{"https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment"}	350
8	2	Charming Studio	Quaint studio in a quiet neighborhood.	98765	Serene Town	Quiet Lane	25	D5	1	45.5	t	{"https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment"}	270
9	2	Luxury Penthouse	Top-floor penthouse with panoramic views.	13579	Metropolis	Skyline Boulevard	99	PH1	3	150	t	{"https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartmenthttps://source.unsplash.com/random?airbnb apartment"}	430
10	1	Riverside Cottage	Cozy cottage by the river.	24680	Riverside Village	River Road	12	RC1	2	80	t	{"https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment"}	595
11	1	Urban Retreat	Urban apartment with modern amenities.	11223	Downtown City	Central Avenue	55	UR2	2	90.5	t	{"https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment","https://source.unsplash.com/random?airbnb apartment"}	195
3	3	Spacious House in Wrocław	Spacious house with a garden	50-001	Wrocław	Green Lane	56	\N	4	200.2	t	{https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1920&auto=format&fit=crop,https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=1920&auto=format&fit=crop,https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?q=80&w=1920&auto=format&fit=crop}	149
2	2	Modern Condo in Warszawa	Modern condo with city views	00-001	Warszawa	Downtown Avenue	34	7B	3	110	f	{https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1920&auto=format&fit=crop,https://images.unsplash.com/photo-1619292585355-ab0e3fd509fe?q=80&w=1920&auto=format&fit=crop,https://images.unsplash.com/photo-1616258417209-66c77488f9a1?q=80&w=1920&auto=format&fit=crop}	300
1	1	Cozy Apartment in Kraków	A cozy apartment in the heart of Kraków	30-001	Kraków	Main Street	12	3A	2	170.5	t	{https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=1920&auto=format&fit=crop,https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?q=80&w=1920&auto=format&fit=crop,https://images.unsplash.com/photo-1610527003928-47afd5f470c6?q=80&w=1920&auto=format&fit=crop}	400
5	1	Cozy Apartment	A comfortable apartment with great amenities.	12345	Example City	Main Street	42	A1	2	75.5	t	{https://marketplace.canva.com/KStBA/MAE7mPKStBA/1/s2/canva-airbnb-cabin-interior-design--MAE7mPKStBA.jpg,https://marketplace.canva.com/QMOJo/MAEdVoQMOJo/1/s2/canva-dressing-gowns-folded-on-a-bed-with-white-sheets-in-a-hotel-room--MAEdVoQMOJo.jpg,https://marketplace.canva.com/eVTlA/MAEFJYeVTlA/1/s2/canva-person-in-white-long-sleeve-shirt-using-macbook-pro-MAEFJYeVTlA.jpg}	350
\.


--
-- Data for Name: properties_amenities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.properties_amenities ("propertyId", "amenityId") FROM stdin;
1	3
1	5
1	6
1	7
1	8
1	10
2	5
2	6
2	7
2	10
3	3
3	4
3	6
3	9
3	8
3	10
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, "userId", "propertyId", rating, content, submitted) FROM stdin;
1	1	2	4	Everything was fine but there was no space to park around the building and I noticed the TV was removed shortly before my stay there, so it's kinda sad :(	2024-01-10
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, role, nick) FROM stdin;
5	zuzix@gmail.com	1ba4b0d475d429fc4aa89f02458fc298.057ef042765787cbb3956fa1dc7198ea89f58e0e40badb364920ce2f7f19737a	0	Zuzia
1	karol@karolkrol.dev	1ba4b0d475d429fc4aa89f02458fc298.057ef042765787cbb3956fa1dc7198ea89f58e0e40badb364920ce2f7f19737a	1	Karol
3	tomasz@zborowski.pl	1ba4b0d475d429fc4aa89f02458fc298.057ef042765787cbb3956fa1dc7198ea89f58e0e40badb364920ce2f7f19737a	0	Tomasz
2	maciej@kowalski.pl	1ba4b0d475d429fc4aa89f02458fc298.057ef042765787cbb3956fa1dc7198ea89f58e0e40badb364920ce2f7f19737a	0	Maciej
8	karol1@karolkrol.dev	a14874ea1090492ebc660aecd21ff205.8b4a61308fea7dc728dcf8340c5721dba002a16d35066a4becca885cd5e8cb3e	0	Karol
9	zuzia@karolkrol.dev	80ea0cb78ce9a79a9f56fbff11e53f2a.b468398370557fcbab23291c8eb3af0ea7d16ae3f85f65c93de59ba590a9e7a5	0	Zuzia
10	zuzia@karolkrol.devv	e96798e423891d3d5247a5fcd27ffc54.5d880bf72528fce811c089a87b9ec23bc2be37df185abc9d8c51c4d21e1f00d1	0	Zuzia
11	zuziak@karolkrol.dev	97ea4f2593e6b5269a0f14d04f0a1d17.04d6956c54c324bed3788618f381e63a59931c98d7036a764031c116d171027c	0	Zuzia
\.


--
-- Name: amenities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.amenities_id_seq', 10, true);


--
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bookings_id_seq', 10, true);


--
-- Name: properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.properties_id_seq', 11, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: users_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_profiles_id_seq', 3, true);


--
-- Name: amenities amenities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amenities
    ADD CONSTRAINT amenities_pkey PRIMARY KEY (id);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: profiles unique_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT unique_id UNIQUE (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: profiles users_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT users_profiles_pkey PRIMARY KEY (id);


--
-- Name: fki_profiles_user_fkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_profiles_user_fkey ON public.profiles USING btree (id);


--
-- Name: fki_profiles_users_fkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_profiles_users_fkey ON public.profiles USING btree (id);


--
-- Name: bookings bookings_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_property_id_fkey FOREIGN KEY ("propertyId") REFERENCES public.properties(id);


--
-- Name: bookings bookings_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_user_id_fkey FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: profiles profiles_users_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_users_fkey FOREIGN KEY (id) REFERENCES public.users(id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED NOT VALID;


--
-- Name: users profiles_users_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT profiles_users_fkey FOREIGN KEY (id) REFERENCES public.profiles(id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED NOT VALID;


--
-- Name: properties properties_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_user_id_fkey FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: properties_amenities property_amenitites_amenity_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties_amenities
    ADD CONSTRAINT property_amenitites_amenity_id_fkey FOREIGN KEY ("amenityId") REFERENCES public.amenities(id);


--
-- Name: properties_amenities property_amenitites_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties_amenities
    ADD CONSTRAINT property_amenitites_property_id_fkey FOREIGN KEY ("propertyId") REFERENCES public.properties(id);


--
-- Name: reviews reviews_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_property_id_fkey FOREIGN KEY ("propertyId") REFERENCES public.properties(id);


--
-- Name: reviews reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

