-- CreateTable
CREATE TABLE "pages" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "site_id" TEXT,
    "page_id" TEXT,
    "url_slug" TEXT,
    "status" TEXT,
    "content" JSONB,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlugResolverJson" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url_slug" TEXT,
    "slug_file" TEXT,

    CONSTRAINT "SlugResolverJson_pkey" PRIMARY KEY ("id")
);
