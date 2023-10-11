--
--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

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
-- Name: shopping; Type: DATABASE; Schema: -; Owner: student
--

CREATE DATABASE shopping WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE shopping OWNER TO student;

\connect shopping

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: abilities; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.abilities (
    id integer NOT NULL,
    name character varying(255),
    label character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.abilities OWNER TO student;

--
-- Name: abilities_id_seq; Type: SEQUENCE; Schema: public; Owner: student
--

CREATE SEQUENCE public.abilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.abilities_id_seq OWNER TO student;

--
-- Name: abilities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: student
--

ALTER SEQUENCE public.abilities_id_seq OWNED BY public.abilities.id;


--
-- Name: ability_role; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.ability_role (
    role_id integer,
    ability_id integer,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.ability_role OWNER TO student;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO student;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: student
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO student;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: student
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: category_product; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.category_product (
    category_id integer,
    product_id integer,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.category_product OWNER TO student;

--
-- Name: coupons; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.coupons (
    id integer NOT NULL,
    code character varying(255) NOT NULL,
    reduction numeric(10,2) NOT NULL,
    end_at character varying(255),
    has_been_used boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.coupons OWNER TO student;

--
-- Name: coupons_id_seq; Type: SEQUENCE; Schema: public; Owner: student
--

CREATE SEQUENCE public.coupons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coupons_id_seq OWNER TO student;

--
-- Name: coupons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: student
--

ALTER SEQUENCE public.coupons_id_seq OWNED BY public.coupons.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    items json,
    price_h_t integer NOT NULL,
    price_t_t_c integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.orders OWNER TO student;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: student
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO student;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: student
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.products (
    id integer NOT NULL,
    ref character varying(255),
    attr text,
    image text NOT NULL,
    meta_description character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    excerpt character varying(255),
    price_h_t integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.products OWNER TO student;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: student
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO student;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: student
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: role_user; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.role_user (
    user_id integer,
    role_id integer,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.role_user OWNER TO student;

--
-- Name: roles; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255),
    label character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO student;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: student
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO student;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: student
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: student
--

CREATE TABLE public.users (
    id integer NOT NULL,
    github_id integer NULL,
    name character varying(255),
    email character varying(255) NULL,
    avatar text,
    password character varying(255) NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO student;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: student
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO student;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: student
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: abilities id; Type: DEFAULT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.abilities ALTER COLUMN id SET DEFAULT nextval('public.abilities_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: coupons id; Type: DEFAULT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.coupons ALTER COLUMN id SET DEFAULT nextval('public.coupons_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: abilities abilities_pkey; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.abilities
    ADD CONSTRAINT abilities_pkey PRIMARY KEY (id);


--
-- Name: ability_role ability_role_ability_id_role_id_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.ability_role
    ADD CONSTRAINT ability_role_ability_id_role_id_key UNIQUE (ability_id, role_id);


--
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: category_product category_product_category_id_product_id_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.category_product
    ADD CONSTRAINT category_product_category_id_product_id_key UNIQUE (category_id, product_id);


--
-- Name: coupons coupons_code_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_code_key UNIQUE (code);


--
-- Name: coupons coupons_pkey; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: products products_ref_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_ref_key UNIQUE (ref);


--
-- Name: role_user role_user_user_id_role_id_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.role_user
    ADD CONSTRAINT role_user_user_id_role_id_key UNIQUE (user_id, role_id);


--
-- Name: roles roles_label_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_label_key UNIQUE (label);


--
-- Name: roles roles_name_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key UNIQUE (name);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: ability_role ability_role_ability_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.ability_role
    ADD CONSTRAINT ability_role_ability_id_fkey FOREIGN KEY (ability_id) REFERENCES public.abilities(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ability_role ability_role_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.ability_role
    ADD CONSTRAINT ability_role_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: category_product category_product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.category_product
    ADD CONSTRAINT category_product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: category_product category_product_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.category_product
    ADD CONSTRAINT category_product_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: role_user role_user_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.role_user
    ADD CONSTRAINT role_user_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: role_user role_user_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: student
--

ALTER TABLE ONLY public.role_user
    ADD CONSTRAINT role_user_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


TRUNCATE "products";
INSERT INTO "products" ("id", "ref", "attr", "image", "meta_description", "title", "description", "excerpt", "price_h_t", "created_at", "updated_at") VALUES
(1,	NULL,	NULL,	'data:image/png;base64,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',	'a great product',	'HP Omen',	'',	NULL,	25000,	'2023-03-20 12:56:46.291+00',	'2023-03-20 12:56:46.291+00'),
(2,	NULL,	NULL,	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACg0lEQVQ4T41TTUxTQRD+9glUMc+DCB6ASgsGKRyApp5UfgJEEpUgBy9GY+LB6AmoaLVCwBKCIHowGuPBhHgxEQ2EiLEqop6ohR5sgfRHCnKAiAeL1SJ96+4SXtpq1D28zDez8803M28JEs6kx787CpwDpTUgRC/ClAYUwJ5MyK0SQ643NoVsAEopcU4HrkChVpaYnEi8julPFrMZ9+ivEkIo96gEDo//DgNn/pwY72XF7poK88RdQTDu9h6XiNQfS/gPIkooOWEs1D8go6OjSfJOrZ8laP+nesydudDiXC5xun2VUUpfdrRZ8WV5GfsOlKOu/ig0Gk0cXyQSweCTAbx7M4btaWlobbcx/VIVee/2X1xdjXSdPnWSDZvNmp1dOTm4cMkKWd4mcCj0Fd2dNgSDswJLkoR79/uRokmxMAJfD5usua+nG5MTTrVqgaEQFmurwF22Dkx53Gqs1GhCo/k8X28vI/A2MSnXl5YW0XbZgpWVFfViY3OLUHWzr1f1ybKM9s4upKdn8BU0E8d0IJ8odIpvIDj7EX2918Qs+Dl0pA6KQvF0eEhg3nuTuYW1qOOQYm3NINbodPsfUYIGbofDYbx6Ycf8XBCH6+qZAorhoUFka7WorKpGamqqIKMKfWwqymsQBK6Zmcy1aJKLmTtUrX83PidtSikuzs9eUP/E8SlvmQRphAnbwnPfjr1GZlYW7wwLn+axv6x8nZKQ7wpI7d4C3ZiAsYUcnkA1EzfAnLJrcgLPn42IcM3BWhSXlHIzREEaTAa9fSMvjoA7HR5fEXsmD1klQ3wX1MNezzGTIe9DrP83Ah5kv/fmrRnaRgk4C/ZRFNz+tiTdqKjQ/UgczS93AOei4CDgTgAAAABJRU5ErkJggg==',	'apple iphone 25',	'Iphone 25',	'<h1>A phone of great value</h1><div>for a small price</div>',	NULL,	11000,	'2023-03-20 13:14:42.323+00',	'2023-03-20 13:14:42.323+00');


TRUNCATE "role_user";
INSERT INTO "role_user" ("user_id", "role_id", "created_at", "updated_at") VALUES
(1,	1,	'2023-03-20 11:08:42.888495+00',	'2023-03-20 11:08:42.888495+00');



TRUNCATE "roles";
INSERT INTO "roles" ("id", "name", "label", "created_at", "updated_at") VALUES
(1,	'owner',	'owner',	'2023-03-20 11:07:33.997488+00',	'2023-03-20 11:07:33.997488+00'),
(2,	'employee',	'employee',	'2023-03-20 11:07:50.314497+00',	'2023-03-20 11:07:50.314497+00'),
(3,	'comptable',	'comptable',	'2023-03-20 11:08:08.572957+00',	'2023-03-20 11:08:08.572957+00'),
(4,	'customer',	'customer',	'2023-03-20 11:08:21.907374+00',	'2023-03-20 11:08:21.907374+00'),
(5,	'gestionnaire',	'gestionnaire',	'2023-03-20 12:05:57.223104+00',	'2023-03-20 12:05:57.223104+00'),
(6,	'CEO',	'CEO',	'2023-03-20 14:17:26.868+00',	'2023-03-20 14:17:26.868+00');



TRUNCATE "users";
INSERT INTO "users" ("id", "github_id", "name", "email", "avatar", "password", "created_at", "updated_at") VALUES
(2,	NULL,	'Gontrand',	'comptable@oclock.io',	NULL,	'$2a$10$gR.NEywtEnEi/FRfn0EImenAEbodwM4ACbljVOTNVQtGkGlS9wYZK',	'2023-03-20 11:18:53.656+00',	'2023-03-20 11:18:53.656+00'),
(1,	NULL,	'Laurent',	'admin@oclock.io',	NULL,	'$2a$10$gR.NEywtEnEi/FRfn0EImenAEbodwM4ACbljVOTNVQtGkGlS9wYZK',	'2023-03-20 11:07:02.284+00',	'2023-03-20 11:07:02.284+00');

ALTER TABLE ONLY "public"."ability_role" ADD CONSTRAINT "ability_role_ability_id_fkey" FOREIGN KEY (ability_id) REFERENCES abilities(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ability_role" ADD CONSTRAINT "ability_role_role_id_fkey" FOREIGN KEY (role_id) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."category_product" ADD CONSTRAINT "category_product_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."category_product" ADD CONSTRAINT "category_product_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."role_user" ADD CONSTRAINT "role_user_role_id_fkey" FOREIGN KEY (role_id) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."role_user" ADD CONSTRAINT "role_user_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

-- 2023-03-20 15:35:49.752533+00

--
-- PostgreSQL database dump complete
--

