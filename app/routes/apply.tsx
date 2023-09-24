import React from "react";
import {
  LoaderFunction,
  Response,
  V2_MetaFunction,
  json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// react hook form
import { Controller, useForm } from "react-hook-form";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";
import Icon from "~/components/shared/Icon";
import DatePicker from "~/components/shared/Datepicker";
import Switch from "~/components/shared/Switch";
import Input from "~/components/shared/Input";
import Textarea from "~/components/shared/TextArea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/shared/Select";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const ref = url.searchParams.get("ref");

  if (!ref) {
    throw new Response(null, {
      status: 404,
    });
  }

  return json({ ref });
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Apply — Maxiruby" },
    { name: "description", content: "Apply — Maxiruby" },
  ];
};

interface FormResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
}

export default function Apply() {
  const { ref } = useLoaderData<typeof loader>();
  const { register, control, watch, handleSubmit, getValues, formState } =
    useForm();

  const [step, setStep] = React.useState<1 | 2>(1);
  const [response, setResponse] = React.useState<FormResponse>({
    loading: false,
    error: false,
    success: false,
  });


  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-10">
            <header className="flex flex-1 flex-row flex-wrap items-center justify-center gap-5">
              <h1 className="text-3xl text-center font-medium font-heading">
                Application Form
              </h1>
            </header>

            <main className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              <ApplicationForm
                referance={ref}
                register={register}
                control={control}
                watch={watch}
                handleSubmit={handleSubmit}
                formState={formState}
                response={response}
              />
            </main>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function ApplicationForm({
  referance,
  register,
  control,
  watch,
  handleSubmit,
  formState,
  response,
}: any) {
  const [isVestingEnabled, setIsVestingEnabled] =
    React.useState<boolean>(false);


  return (
    <form
      onSubmit={() => {}}
      className="flex flex-1 flex-col max-w-[768px] mx-auto gap-16"
    >
      {/* project information */}
      <section className="flex flex-1 flex-col gap-6">
        <strong className="font-bold text-lg">Project Information</strong>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="private_key">Reference Key *</label>
            <Input
              {...register("private_key", {
                required: true,
                maxLength: 19,
                pattern: /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
              })}
              type="text"
              id="private_key"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              defaultValue={referance}
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="project_name">Project Name</label>
            <Input
              {...register("project_name", { required: true })}
              type="text"
              id="project_name"
              placeholder="My Awesome Project"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="project_description">Project Description</label>
            <Textarea
              {...register("project_description", { required: true })}
              id="project_name"
              placeholder="About my project..."
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label
              className="relative flex items-center gap-4 -translate-y-2 cursor-pointer"
              htmlFor="private"
            >
              <Input
                {...register("project_type", { required: true })}
                id="private"
                type="radio"
                value="private"
                className="hidden"
              />

              <span className="flex w-5 h-5 rounded-full border border-solid border-border transition-colors duration-150" />
              <span>Private</span>
            </label>
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label
              className="relative flex items-center gap-4 -translate-y-2 cursor-pointer"
              htmlFor="public"
            >
              <Input
                {...register("project_type", { required: true })}
                id="public"
                type="radio"
                value="public"
                className="hidden"
              />

              <span className="flex w-5 h-5 rounded-full border border-solid border-border transition-colors duration-150" />
              <span>Public</span>
            </label>
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="chain">Chain</label>
            <Select {...register("chain", { required: true })} id="chain">
              <SelectTrigger className="!h-[46px]">
                <SelectValue placeholder="Select Chain" className="!h-[46px]" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="0x38">BNB</SelectItem>
                <SelectItem value="0x89">POLYGON</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* token information */}
      <section className="flex flex-1 flex-col gap-6">
        <strong className="font-bold text-lg">Token Information</strong>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="token_address">Token Address</label>
            <Input
              {...register("token_address", { required: true })}
              type="text"
              id="token_address"
              placeholder="0x...."
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="token_owner_address">Token Owner Address</label>
            <Input
              {...register("token_owner_address", { required: true })}
              type="text"
              id="token_owner_address"
              placeholder="0x...."
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="token_icon">Token Icon</label>
            <small className="text-xs text-muted-foreground font-medium">
              Only CDN urls are supported.
            </small>
            <Input
              {...register("token_icon", {
                required: true,
                pattern: {
                  value: /^https?:\/\//,
                },
              })}
              type="text"
              id="token_icon"
              placeholder="https://"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="token_symbol">Token Symbol</label>
            <Input
              {...register("token_symbol", { required: true })}
              type="text"
              id="token_symbol"
              placeholder="XXX"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="token_price">Token Price</label>
            <small className="text-xs text-muted-foreground font-medium">
              Token price in USD.
            </small>
            <Input
              {...register("token_price", {
                required: true,
              })}
              type="text"
              id="token_price"
              placeholder="0.00"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="token_decimals">Token Decimals</label>
            <Input
              {...register("token_decimals", { required: true })}
              type="text"
              id="token_decimals"
              placeholder="18"
            />
          </div>
        </div>
      </section>

      {/* supply information */}
      <section className="flex flex-1 flex-col gap-6">
        <strong className="font-bold text-lg">Supply</strong>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="hard_cap">Hard Cap</label>
            <Input
              {...register("hard_cap", { required: true })}
              type="text"
              id="hard_cap"
              placeholder="0"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="soft_cap">Soft Cap</label>
            <Input
              {...register("soft_cap", { required: true })}
              type="text"
              id="soft_cap"
              placeholder="0"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="cap">Cap</label>
            <Input
              {...register("cap", { required: true })}
              type="text"
              id="cap"
              placeholder="0"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="total_supply">Total Supply</label>
            <Input
              {...register("total_supply", { required: true })}
              type="text"
              id="total_supply"
              placeholder="0"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="minimum_payment_amount">
              Minimum Payment Amount
            </label>
            <Input
              {...register("minimum_payment_amount", {
                required: true,
              })}
              type="text"
              id="minimum_payment_amount"
              placeholder="0"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="maximum_payment_amount">
              Maxiumum Payment Amount
            </label>
            <Input
              {...register("maximum_payment_amount", {
                required: true,
              })}
              type="text"
              id="maximum_payment_amount"
              placeholder="0"
            />
          </div>
        </div>
      </section>

      {/* listing information */}
      <section className="flex flex-1 flex-col gap-6">
        <strong className="font-bold text-lg">Listing</strong>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="dex_listing_time">Dex Listing Time</label>
            <Controller
              name="dex_listing_time"
              control={control}
              render={({ field }) => (
                <DatePicker
                  date={field.value}
                  setDate={(date) => field.onChange(date)}
                />
              )}
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="dex_listing_percentage">
              Dex Listing Percentage
            </label>
            <div className="relative flex items-center">
              <span className="absolute right-4">%</span>
              <Input
                {...register("dex_listing_percentage", {
                  required: true,
                })}
                type="number"
                id="dex_listing_percentage"
                placeholder="0"
                min={0}
                max={100}
                maxLength={3}
                className="appearance-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="open_time">Open Time</label>
            <Controller
              name="open_time"
              control={control}
              render={({ field }) => (
                <DatePicker
                  date={field.value}
                  setDate={(date) => field.onChange(date)}
                />
              )}
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="close_time">Close Time</label>
            <Controller
              name="close_time"
              control={control}
              render={({ field }) => {
                return (
                  <DatePicker
                    date={field.value}
                    setDate={(date) => field.onChange(date)}
                  />
                );
              }}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="fcfs_open_time">FCFS Open Time</label>
            <Controller
              name="fcfs_open_time"
              control={control}
              render={({ field }) => (
                <DatePicker
                  date={field.value}
                  setDate={(date) => field.onChange(date)}
                />
              )}
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="claim_open_time">Claim Open Time</label>
            <Controller
              name="claim_open_time"
              control={control}
              render={({ field }) => (
                <DatePicker
                  date={field.value}
                  setDate={(date) => field.onChange(date)}
                />
              )}
            />
          </div>
        </div>
      </section>

      {/* vesting information */}
      <section className="flex flex-1 flex-col gap-6">
        <strong className="font-bold text-lg">Vesting</strong>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label
              htmlFor="vesting"
              className="flex flex-row items-center justify-between"
            >
              <strong className="font-semibold">
                Enable Vesting (optional)
              </strong>
              {/* switch */}
              <Input
                {...register("vesting", {
                  onChange: () => setIsVestingEnabled((current) => !current),
                })}
                type="checkbox"
                id="vesting"
                className="hidden"
              />

              <Switch
                checked={isVestingEnabled}
                onCheckedChange={(checked) => setIsVestingEnabled(checked)}
              />
            </label>
          </div>
        </div>

        {isVestingEnabled ? (
          <>
            <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
              <div className="flex flex-1 flex-col gap-y-1.5">
                <label htmlFor="vesting_period">Vesting Period</label>

                <Select
                  {...register("chain", { required: true })}
                  id="vesting_period"
                >
                  <SelectTrigger className="!h-[46px]">
                    <SelectValue
                      placeholder="Select Vesting Period"
                      className="!h-[46px]"
                    />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="2629743">1 month</SelectItem>
                    <SelectItem value="5256000">2 months</SelectItem>
                    <SelectItem value="7884000">3 months</SelectItem>
                    <SelectItem value="10518984">4 months</SelectItem>
                    <SelectItem value="13140000">5 months</SelectItem>
                    <SelectItem value="15778463">6 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-1 flex-col gap-y-1.5">
                <label htmlFor="vesting_amount">Vesting Percentage</label>
                <div className="relative flex items-center">
                  <span className="absolute right-4">%</span>
                  <Input
                    {...register("vesting_amount", { required: true })}
                    type="text"
                    id="vesting_amount"
                    placeholder="0"
                    className="appearance-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
              <div className="flex flex-1 flex-col gap-y-1.5">
                <label htmlFor="vesting_start_time">Vesting Start</label>
                <Controller
                  name="vesting_start_time"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      date={field.value}
                      setDate={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>

              <div className="flex flex-1 flex-col gap-y-1.5">
                <label htmlFor="vesting_duration">Vesting End</label>
                <Controller
                  name="vesting_duration"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      date={field.value}
                      setDate={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>
            </div>
          </>
        ) : null}
      </section>

      {/* security information */}
      <section className="flex flex-1 flex-col gap-6">
        <strong className="font-bold text-lg">Security</strong>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="audit_url">Audit URL (optional)</label>
            <Input
              {...register("audit_url", {
                pattern: {
                  value: /^https?:\/\//,
                },
              })}
              type="text"
              id="audit_url"
              placeholder="https://"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="burn_address">Burn Address (optional)</label>
            <Input
              {...register("burn_address")}
              type="text"
              id="burn_address"
              placeholder="0x...."
            />
          </div>
        </div>
      </section>

      {/* social information */}
      <section className="flex flex-1 flex-col gap-6">
        <strong className="font-bold text-lg">Social</strong>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="coingecko_coin_id">
              Coingecko Coin ID (optional)
            </label>
            <Input
              {...register("coingecko_coin_id")}
              type="text"
              id="coingecko_coin_id"
              placeholder="my-coin"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="website_url">Website URL</label>
            <Input
              {...register("website_url", {
                required: true,
                pattern: {
                  value: /^https?:\/\//,
                },
              })}
              type="text"
              id="website_url"
              placeholder="https://"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="twitter_url">Twitter URL (optional)</label>
            <Input
              {...register("twitter_url", {
                pattern: {
                  value: /^https?:\/\//,
                },
              })}
              type="text"
              id="twitter_url"
              placeholder="https://"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="telegram_url">Telegram URL</label>
            <Input
              {...register("telegram_url", {
                required: true,
                pattern: {
                  value: /^https?:\/\//,
                },
              })}
              type="text"
              id="telegram_url"
              placeholder="https://"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="discord_url">Discord URL (optional)</label>
            <Input
              {...register("discord_url", {
                pattern: {
                  value: /^https?:\/\//,
                },
              })}
              type="text"
              id="discord_url"
              placeholder="https://"
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5">
            <label htmlFor="linkedin_url">Linkedin URL (optional)</label>
            <Input
              {...register("linkedin_url", {
                pattern: {
                  value: /^https?:\/\//,
                },
              })}
              type="text"
              id="linkedin_url"
              placeholder="https://"
            />
          </div>
        </div>
      </section>

      {/* submit form */}
      <div className="flex flex-1 flex-row flex-wrap items-end px-2 gap-2">
        <div className="flex flex-1 flex-col gap-y-1.5">
          <Button
            type="submit"
            title="Apply"
            variant="primary"
            disabled={formState.isSubmitting || response.loading}
          >
            {response.loading ? (
              <>
                <Icon icon="spinner" />
                <span>Applying</span>
              </>
            ) : (
              "Apply"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
