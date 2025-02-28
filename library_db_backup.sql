toc.dat                                                                                             0000600 0004000 0002000 00000012445 14724321400 0014442 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP        8                |         
   library_db    16.6    16.6     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    16520 
   library_db    DATABASE     ~   CREATE DATABASE library_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Europe.1254';
    DROP DATABASE library_db;
                postgres    false                     2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false         �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4         �            1259    16522    book    TABLE     &  CREATE TABLE public.book (
    id integer NOT NULL,
    "lendStatus" integer NOT NULL,
    score character varying NOT NULL,
    name character varying NOT NULL,
    author character varying NOT NULL,
    year integer NOT NULL,
    publisher character varying NOT NULL,
    "userId" integer
);
    DROP TABLE public.book;
       public         heap    postgres    false    4         �            1259    16521    book_id_seq    SEQUENCE     �   CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.book_id_seq;
       public          postgres    false    216    4         �           0    0    book_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;
          public          postgres    false    215         �            1259    16531    user    TABLE     ]   CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false    4         �            1259    16530    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    218    4         �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    217         U           2604    16525    book id    DEFAULT     b   ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);
 6   ALTER TABLE public.book ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216         V           2604    16534    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218         �          0    16522    book 
   TABLE DATA           `   COPY public.book (id, "lendStatus", score, name, author, year, publisher, "userId") FROM stdin;
    public          postgres    false    216       4844.dat �          0    16531    user 
   TABLE DATA           *   COPY public."user" (id, name) FROM stdin;
    public          postgres    false    218       4846.dat �           0    0    book_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.book_id_seq', 10, true);
          public          postgres    false    215         �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 5, true);
          public          postgres    false    217         X           2606    16529 #   book PK_a3afef72ec8f80e6e5c310b28a4 
   CONSTRAINT     c   ALTER TABLE ONLY public.book
    ADD CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.book DROP CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4";
       public            postgres    false    216         Z           2606    16538 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    218         [           2606    16539 #   book FK_04f66cf2a34f8efc5dcd9803693    FK CONSTRAINT     �   ALTER TABLE ONLY public.book
    ADD CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693" FOREIGN KEY ("userId") REFERENCES public."user"(id);
 O   ALTER TABLE ONLY public.book DROP CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693";
       public          postgres    false    216    218    4698                                                                                                                                                                                                                                   4844.dat                                                                                            0000600 0004000 0002000 00000001317 14724321400 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	-1	-1	The Shining	Stephen King	1977	Doubleday	\N
2	-1	1	Harry Potter and the Philosopher's Stone	J.K. Rowling	1997	Bloomsbury	\N
3	-1	2	Nineteen Eighty-Four	George Orwell	1949	Secker & Warburg	\N
4	-1	3	To Kill a Mockingbird	Harper Lee	1960	J.B. Lippincott & Co.	\N
5	-1	-1	The Lord of the Rings	J.R.R. Tolkien	1954	Allen & Unwin	\N
6	-1	5	And Then There Were None	Agatha Christie	1939	Collins Crime Club	\N
7	-1	6	War and Peace	Leo Tolstoy	1869	The Russian Messenger	\N
8	-1	7	The Great Gatsby	F. Scott Fitzgerald	1925	Charles Scribner's Sons	\N
9	-1	8	One Hundred Years of Solitude	Gabriel Garcia Marquez	1967	Editorial Sudamericana	\N
10	-1	9	Adventures of Huckleberry Finn	Mark Twain	1884	Chatto & Windus	\N
\.


                                                                                                                                                                                                                                                                                                                 4846.dat                                                                                            0000600 0004000 0002000 00000000111 14724321400 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Engin Karataş
2	Jane Doe
3	Alice Johnson
4	Bob Smith
5	Eve Brown
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                       restore.sql                                                                                         0000600 0004000 0002000 00000011333 14724321400 0015362 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6
-- Dumped by pg_dump version 16.6

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

DROP DATABASE library_db;
--
-- Name: library_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE library_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Europe.1254';


ALTER DATABASE library_db OWNER TO postgres;

\connect library_db

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
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book (
    id integer NOT NULL,
    "lendStatus" integer NOT NULL,
    score character varying NOT NULL,
    name character varying NOT NULL,
    author character varying NOT NULL,
    year integer NOT NULL,
    publisher character varying NOT NULL,
    "userId" integer
);


ALTER TABLE public.book OWNER TO postgres;

--
-- Name: book_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.book_id_seq OWNER TO postgres;

--
-- Name: book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: book id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.book (id, "lendStatus", score, name, author, year, publisher, "userId") FROM stdin;
\.
COPY public.book (id, "lendStatus", score, name, author, year, publisher, "userId") FROM '$$PATH$$/4844.dat';

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, name) FROM stdin;
\.
COPY public."user" (id, name) FROM '$$PATH$$/4846.dat';

--
-- Name: book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.book_id_seq', 10, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 5, true);


--
-- Name: book PK_a3afef72ec8f80e6e5c310b28a4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: book FK_04f66cf2a34f8efc5dcd9803693; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     