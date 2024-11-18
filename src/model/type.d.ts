declare namespace Components {
    namespace Schemas {
        /**
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
        }
        /**
         * ValidationError
         */
        export interface ValidationError {
            /**
             * Location
             */
            loc: (string | number)[];
            /**
             * Message
             */
            msg: string;
            /**
             * Error Type
             */
            type: string;
        }
    }
}
declare namespace Paths {
    namespace GetDemandRegionalizedDemandHistoricalGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
            /**
             * State
             */
            export type State = string;
        }
        export interface QueryParameters {
            state?: /* State */ Parameters.State;
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetGenerationTypeRegionalizedGenerationPerTypeHistoricalGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
            /**
             * State
             */
            export type State = string;
        }
        export interface QueryParameters {
            state?: /* State */ Parameters.State;
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetGenerationTypeRegionalizedGenerationPerTypePreliminaryGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
            /**
             * State
             */
            export type State = string;
        }
        export interface QueryParameters {
            state?: /* State */ Parameters.State;
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityConsumptionIntensityHistoricalAllGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
        }
        export interface QueryParameters {
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityConsumptionIntensityHistoricalGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
            /**
             * State
             */
            export type State = string;
        }
        export interface QueryParameters {
            state?: /* State */ Parameters.State;
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityConsumptionIntensityPreliminaryAllGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
        }
        export interface QueryParameters {
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityConsumptionIntensityPreliminaryGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
            /**
             * State
             */
            export type State = string;
        }
        export interface QueryParameters {
            state?: /* State */ Parameters.State;
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityProductionIntensityHistoricalAllGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
        }
        export interface QueryParameters {
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityProductionIntensityHistoricalGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
            /**
             * State
             */
            export type State = string;
        }
        export interface QueryParameters {
            state?: /* State */ Parameters.State;
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityProductionIntensityPreliminaryAllGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
        }
        export interface QueryParameters {
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetIntensityProductionIntensityPreliminaryGet {
        namespace Parameters {
            /**
             * Country
             */
            export type Country = string;
            /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            export type End = string;
            /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            export type Start = string;
            /**
             * State
             */
            export type State = string;
        }
        export interface QueryParameters {
            state?: /* State */ Parameters.State;
            country?: /* Country */ Parameters.Country;
            start?: /**
             * Start
             * Date format 'YYYY-MM-DD', defaults to yesterday if not given
             */
            Parameters.Start;
            end?: /**
             * End
             * Date format 'YYYY-MM-DD', defaults to today if not given
             */
            Parameters.End;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetStateStateGet {
        namespace Responses {
            export type $200 = any;
        }
    }
}
