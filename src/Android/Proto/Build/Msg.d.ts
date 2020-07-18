import * as $protobuf from "protobufjs";
/** Namespace Msg. */
export namespace Msg {

    /** Properties of a MsgField. */
    interface IMsgField {
    }

    /** Represents a MsgField. */
    class MsgField implements IMsgField {

        /**
         * Constructs a new MsgField.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMsgField);

        /**
         * Creates a new MsgField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgField instance
         */
        public static create(properties?: Msg.IMsgField): Msg.MsgField;

        /**
         * Encodes the specified MsgField message. Does not implicitly {@link Msg.MsgField.verify|verify} messages.
         * @param message MsgField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMsgField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgField message, length delimited. Does not implicitly {@link Msg.MsgField.verify|verify} messages.
         * @param message MsgField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMsgField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField;

        /**
         * Decodes a MsgField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField;

        /**
         * Verifies a MsgField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgField
         */
        public static fromObject(object: { [k: string]: any }): Msg.MsgField;

        /**
         * Creates a plain object from a MsgField message. Also converts values to other types if specified.
         * @param message MsgField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.MsgField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MsgField {

        /** Properties of an ImMsgBody. */
        interface IImMsgBody {
        }

        /** Represents an ImMsgBody. */
        class ImMsgBody implements IImMsgBody {

            /**
             * Constructs a new ImMsgBody.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IImMsgBody);

            /**
             * Creates a new ImMsgBody instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImMsgBody instance
             */
            public static create(properties?: Msg.MsgField.IImMsgBody): Msg.MsgField.ImMsgBody;

            /**
             * Encodes the specified ImMsgBody message. Does not implicitly {@link Msg.MsgField.ImMsgBody.verify|verify} messages.
             * @param message ImMsgBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IImMsgBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImMsgBody message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.verify|verify} messages.
             * @param message ImMsgBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IImMsgBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImMsgBody message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImMsgBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody;

            /**
             * Decodes an ImMsgBody message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImMsgBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody;

            /**
             * Verifies an ImMsgBody message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImMsgBody message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImMsgBody
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody;

            /**
             * Creates a plain object from an ImMsgBody message. Also converts values to other types if specified.
             * @param message ImMsgBody
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.ImMsgBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImMsgBody to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ImMsgBody {

            /** Properties of an Attribute. */
            interface IAttribute {

                /** Attribute CodePage */
                CodePage?: (number|null);

                /** Attribute Time */
                Time?: (number|null);

                /** Attribute Random */
                Random?: (number|null);

                /** Attribute Color */
                Color?: (number|null);

                /** Attribute Size */
                Size?: (number|null);

                /** Attribute Effect */
                Effect?: (number|null);

                /** Attribute CharSet */
                CharSet?: (number|null);

                /** Attribute PitchAndFamily */
                PitchAndFamily?: (number|null);

                /** Attribute FontName */
                FontName?: (Uint8Array|null);

                /** Attribute ReserveData */
                ReserveData?: (Uint8Array|null);
            }

            /** Represents an Attribute. */
            class Attribute implements IAttribute {

                /**
                 * Constructs a new Attribute.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IAttribute);

                /** Attribute CodePage. */
                public CodePage: number;

                /** Attribute Time. */
                public Time: number;

                /** Attribute Random. */
                public Random: number;

                /** Attribute Color. */
                public Color: number;

                /** Attribute Size. */
                public Size: number;

                /** Attribute Effect. */
                public Effect: number;

                /** Attribute CharSet. */
                public CharSet: number;

                /** Attribute PitchAndFamily. */
                public PitchAndFamily: number;

                /** Attribute FontName. */
                public FontName: Uint8Array;

                /** Attribute ReserveData. */
                public ReserveData: Uint8Array;

                /**
                 * Creates a new Attribute instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Attribute instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IAttribute): Msg.MsgField.ImMsgBody.Attribute;

                /**
                 * Encodes the specified Attribute message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Attribute.verify|verify} messages.
                 * @param message Attribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Attribute message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Attribute.verify|verify} messages.
                 * @param message Attribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Attribute message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Attribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Attribute;

                /**
                 * Decodes an Attribute message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Attribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Attribute;

                /**
                 * Verifies an Attribute message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Attribute
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Attribute;

                /**
                 * Creates a plain object from an Attribute message. Also converts values to other types if specified.
                 * @param message Attribute
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Attribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Attribute to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotOnlineFile. */
            interface INotOnlineFile {

                /** NotOnlineFile FileType */
                FileType?: (number|null);

                /** NotOnlineFile Sig */
                Sig?: (Uint8Array|null);

                /** NotOnlineFile FileUuid */
                FileUuid?: (Uint8Array|null);

                /** NotOnlineFile FileMd5 */
                FileMd5?: (Uint8Array|null);

                /** NotOnlineFile FileName */
                FileName?: (Uint8Array|null);

                /** NotOnlineFile FileSize */
                FileSize?: (number|null);

                /** NotOnlineFile Note */
                Note?: (Uint8Array|null);

                /** NotOnlineFile Reserved */
                Reserved?: (Uint8Array|null);

                /** NotOnlineFile Subcmd */
                Subcmd?: (number|null);

                /** NotOnlineFile MicroCloud */
                MicroCloud?: (number|null);

                /** NotOnlineFile BytesFileUrls */
                BytesFileUrls?: (Uint8Array[]|null);

                /** NotOnlineFile DownloadFlag */
                DownloadFlag?: (number|null);

                /** NotOnlineFile DangerEvel */
                DangerEvel?: (number|null);

                /** NotOnlineFile LifeTime */
                LifeTime?: (number|null);

                /** NotOnlineFile UploadTime */
                UploadTime?: (number|null);

                /** NotOnlineFile AbsFileType */
                AbsFileType?: (number|null);

                /** NotOnlineFile ClientType */
                ClientType?: (number|null);

                /** NotOnlineFile ExpireTime */
                ExpireTime?: (number|null);

                /** NotOnlineFile PbReserve */
                PbReserve?: (Uint8Array|null);
            }

            /** Represents a NotOnlineFile. */
            class NotOnlineFile implements INotOnlineFile {

                /**
                 * Constructs a new NotOnlineFile.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.INotOnlineFile);

                /** NotOnlineFile FileType. */
                public FileType: number;

                /** NotOnlineFile Sig. */
                public Sig: Uint8Array;

                /** NotOnlineFile FileUuid. */
                public FileUuid: Uint8Array;

                /** NotOnlineFile FileMd5. */
                public FileMd5: Uint8Array;

                /** NotOnlineFile FileName. */
                public FileName: Uint8Array;

                /** NotOnlineFile FileSize. */
                public FileSize: number;

                /** NotOnlineFile Note. */
                public Note: Uint8Array;

                /** NotOnlineFile Reserved. */
                public Reserved: Uint8Array;

                /** NotOnlineFile Subcmd. */
                public Subcmd: number;

                /** NotOnlineFile MicroCloud. */
                public MicroCloud: number;

                /** NotOnlineFile BytesFileUrls. */
                public BytesFileUrls: Uint8Array[];

                /** NotOnlineFile DownloadFlag. */
                public DownloadFlag: number;

                /** NotOnlineFile DangerEvel. */
                public DangerEvel: number;

                /** NotOnlineFile LifeTime. */
                public LifeTime: number;

                /** NotOnlineFile UploadTime. */
                public UploadTime: number;

                /** NotOnlineFile AbsFileType. */
                public AbsFileType: number;

                /** NotOnlineFile ClientType. */
                public ClientType: number;

                /** NotOnlineFile ExpireTime. */
                public ExpireTime: number;

                /** NotOnlineFile PbReserve. */
                public PbReserve: Uint8Array;

                /**
                 * Creates a new NotOnlineFile instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotOnlineFile instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.INotOnlineFile): Msg.MsgField.ImMsgBody.NotOnlineFile;

                /**
                 * Encodes the specified NotOnlineFile message. Does not implicitly {@link Msg.MsgField.ImMsgBody.NotOnlineFile.verify|verify} messages.
                 * @param message NotOnlineFile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.INotOnlineFile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotOnlineFile message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.NotOnlineFile.verify|verify} messages.
                 * @param message NotOnlineFile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.INotOnlineFile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotOnlineFile message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotOnlineFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.NotOnlineFile;

                /**
                 * Decodes a NotOnlineFile message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotOnlineFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.NotOnlineFile;

                /**
                 * Verifies a NotOnlineFile message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotOnlineFile message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotOnlineFile
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.NotOnlineFile;

                /**
                 * Creates a plain object from a NotOnlineFile message. Also converts values to other types if specified.
                 * @param message NotOnlineFile
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.NotOnlineFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotOnlineFile to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Ptt. */
            interface IPtt {

                /** Ptt FileType */
                FileType?: (number|null);

                /** Ptt SrcUin */
                SrcUin?: (number|Long|null);

                /** Ptt FileUuid */
                FileUuid?: (Uint8Array|null);

                /** Ptt FileMd5 */
                FileMd5?: (Uint8Array|null);

                /** Ptt FileName */
                FileName?: (Uint8Array|null);

                /** Ptt FileSize */
                FileSize?: (number|null);

                /** Ptt Reserve */
                Reserve?: (Uint8Array|null);

                /** Ptt FileId */
                FileId?: (number|null);

                /** Ptt ServerIp */
                ServerIp?: (number|null);

                /** Ptt ServerPort */
                ServerPort?: (number|null);

                /** Ptt BoolValid */
                BoolValid?: (boolean|null);

                /** Ptt Signature */
                Signature?: (Uint8Array|null);

                /** Ptt Shortcut */
                Shortcut?: (Uint8Array|null);

                /** Ptt FileKey */
                FileKey?: (Uint8Array|null);

                /** Ptt MagicPttIndex */
                MagicPttIndex?: (number|null);

                /** Ptt VoiceSwitch */
                VoiceSwitch?: (number|null);

                /** Ptt PttUrl */
                PttUrl?: (Uint8Array|null);

                /** Ptt GroupFileKey */
                GroupFileKey?: (Uint8Array|null);

                /** Ptt Time */
                Time?: (number|null);

                /** Ptt DownPara */
                DownPara?: (Uint8Array|null);

                /** Ptt Format */
                Format?: (number|null);

                /** Ptt PbReserve */
                PbReserve?: (Uint8Array|null);

                /** Ptt BytesPttUrls */
                BytesPttUrls?: (Uint8Array[]|null);

                /** Ptt DownloadFlag */
                DownloadFlag?: (number|null);
            }

            /** Represents a Ptt. */
            class Ptt implements IPtt {

                /**
                 * Constructs a new Ptt.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IPtt);

                /** Ptt FileType. */
                public FileType: number;

                /** Ptt SrcUin. */
                public SrcUin: (number|Long);

                /** Ptt FileUuid. */
                public FileUuid: Uint8Array;

                /** Ptt FileMd5. */
                public FileMd5: Uint8Array;

                /** Ptt FileName. */
                public FileName: Uint8Array;

                /** Ptt FileSize. */
                public FileSize: number;

                /** Ptt Reserve. */
                public Reserve: Uint8Array;

                /** Ptt FileId. */
                public FileId: number;

                /** Ptt ServerIp. */
                public ServerIp: number;

                /** Ptt ServerPort. */
                public ServerPort: number;

                /** Ptt BoolValid. */
                public BoolValid: boolean;

                /** Ptt Signature. */
                public Signature: Uint8Array;

                /** Ptt Shortcut. */
                public Shortcut: Uint8Array;

                /** Ptt FileKey. */
                public FileKey: Uint8Array;

                /** Ptt MagicPttIndex. */
                public MagicPttIndex: number;

                /** Ptt VoiceSwitch. */
                public VoiceSwitch: number;

                /** Ptt PttUrl. */
                public PttUrl: Uint8Array;

                /** Ptt GroupFileKey. */
                public GroupFileKey: Uint8Array;

                /** Ptt Time. */
                public Time: number;

                /** Ptt DownPara. */
                public DownPara: Uint8Array;

                /** Ptt Format. */
                public Format: number;

                /** Ptt PbReserve. */
                public PbReserve: Uint8Array;

                /** Ptt BytesPttUrls. */
                public BytesPttUrls: Uint8Array[];

                /** Ptt DownloadFlag. */
                public DownloadFlag: number;

                /**
                 * Creates a new Ptt instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Ptt instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IPtt): Msg.MsgField.ImMsgBody.Ptt;

                /**
                 * Encodes the specified Ptt message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Ptt.verify|verify} messages.
                 * @param message Ptt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IPtt, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Ptt message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Ptt.verify|verify} messages.
                 * @param message Ptt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IPtt, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Ptt message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Ptt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Ptt;

                /**
                 * Decodes a Ptt message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Ptt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Ptt;

                /**
                 * Verifies a Ptt message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Ptt message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Ptt
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Ptt;

                /**
                 * Creates a plain object from a Ptt message. Also converts values to other types if specified.
                 * @param message Ptt
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Ptt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Ptt to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TmpPtt. */
            interface ITmpPtt {

                /** TmpPtt FileType */
                FileType?: (number|null);

                /** TmpPtt FileUuid */
                FileUuid?: (Uint8Array|null);

                /** TmpPtt FileMd5 */
                FileMd5?: (Uint8Array|null);

                /** TmpPtt FileName */
                FileName?: (Uint8Array|null);

                /** TmpPtt FileSize */
                FileSize?: (number|null);

                /** TmpPtt PttTimes */
                PttTimes?: (number|null);

                /** TmpPtt UserType */
                UserType?: (number|null);

                /** TmpPtt PtttransFlag */
                PtttransFlag?: (number|null);

                /** TmpPtt BusiType */
                BusiType?: (number|null);

                /** TmpPtt MsgId */
                MsgId?: (number|Long|null);

                /** TmpPtt PbReserve */
                PbReserve?: (Uint8Array|null);

                /** TmpPtt PttEncodeData */
                PttEncodeData?: (Uint8Array|null);
            }

            /** Represents a TmpPtt. */
            class TmpPtt implements ITmpPtt {

                /**
                 * Constructs a new TmpPtt.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ITmpPtt);

                /** TmpPtt FileType. */
                public FileType: number;

                /** TmpPtt FileUuid. */
                public FileUuid: Uint8Array;

                /** TmpPtt FileMd5. */
                public FileMd5: Uint8Array;

                /** TmpPtt FileName. */
                public FileName: Uint8Array;

                /** TmpPtt FileSize. */
                public FileSize: number;

                /** TmpPtt PttTimes. */
                public PttTimes: number;

                /** TmpPtt UserType. */
                public UserType: number;

                /** TmpPtt PtttransFlag. */
                public PtttransFlag: number;

                /** TmpPtt BusiType. */
                public BusiType: number;

                /** TmpPtt MsgId. */
                public MsgId: (number|Long);

                /** TmpPtt PbReserve. */
                public PbReserve: Uint8Array;

                /** TmpPtt PttEncodeData. */
                public PttEncodeData: Uint8Array;

                /**
                 * Creates a new TmpPtt instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TmpPtt instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ITmpPtt): Msg.MsgField.ImMsgBody.TmpPtt;

                /**
                 * Encodes the specified TmpPtt message. Does not implicitly {@link Msg.MsgField.ImMsgBody.TmpPtt.verify|verify} messages.
                 * @param message TmpPtt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ITmpPtt, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TmpPtt message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.TmpPtt.verify|verify} messages.
                 * @param message TmpPtt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ITmpPtt, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TmpPtt message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TmpPtt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.TmpPtt;

                /**
                 * Decodes a TmpPtt message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TmpPtt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.TmpPtt;

                /**
                 * Verifies a TmpPtt message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TmpPtt message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TmpPtt
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.TmpPtt;

                /**
                 * Creates a plain object from a TmpPtt message. Also converts values to other types if specified.
                 * @param message TmpPtt
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.TmpPtt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TmpPtt to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Trans211TmpMsg. */
            interface ITrans211TmpMsg {

                /** Trans211TmpMsg MsgBody */
                MsgBody?: (Uint8Array|null);

                /** Trans211TmpMsg C2cCmd */
                C2cCmd?: (number|null);
            }

            /** Represents a Trans211TmpMsg. */
            class Trans211TmpMsg implements ITrans211TmpMsg {

                /**
                 * Constructs a new Trans211TmpMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ITrans211TmpMsg);

                /** Trans211TmpMsg MsgBody. */
                public MsgBody: Uint8Array;

                /** Trans211TmpMsg C2cCmd. */
                public C2cCmd: number;

                /**
                 * Creates a new Trans211TmpMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Trans211TmpMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ITrans211TmpMsg): Msg.MsgField.ImMsgBody.Trans211TmpMsg;

                /**
                 * Encodes the specified Trans211TmpMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Trans211TmpMsg.verify|verify} messages.
                 * @param message Trans211TmpMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ITrans211TmpMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Trans211TmpMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Trans211TmpMsg.verify|verify} messages.
                 * @param message Trans211TmpMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ITrans211TmpMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Trans211TmpMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Trans211TmpMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Trans211TmpMsg;

                /**
                 * Decodes a Trans211TmpMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Trans211TmpMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Trans211TmpMsg;

                /**
                 * Verifies a Trans211TmpMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Trans211TmpMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Trans211TmpMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Trans211TmpMsg;

                /**
                 * Creates a plain object from a Trans211TmpMsg message. Also converts values to other types if specified.
                 * @param message Trans211TmpMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Trans211TmpMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Trans211TmpMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Text. */
            interface IText {

                /** Text Str */
                Str?: (string|null);

                /** Text Link */
                Link?: (string|null);

                /** Text AttrBuff6 */
                AttrBuff6?: (Uint8Array|null);

                /** Text AttrBuff7 */
                AttrBuff7?: (Uint8Array|null);

                /** Text Buff */
                Buff?: (Uint8Array|null);

                /** Text PbReserve */
                PbReserve?: (Uint8Array|null);
            }

            /** Represents a Text. */
            class Text implements IText {

                /**
                 * Constructs a new Text.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IText);

                /** Text Str. */
                public Str: string;

                /** Text Link. */
                public Link: string;

                /** Text AttrBuff6. */
                public AttrBuff6: Uint8Array;

                /** Text AttrBuff7. */
                public AttrBuff7: Uint8Array;

                /** Text Buff. */
                public Buff: Uint8Array;

                /** Text PbReserve. */
                public PbReserve: Uint8Array;

                /**
                 * Creates a new Text instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Text instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IText): Msg.MsgField.ImMsgBody.Text;

                /**
                 * Encodes the specified Text message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Text.verify|verify} messages.
                 * @param message Text message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IText, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Text message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Text.verify|verify} messages.
                 * @param message Text message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IText, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Text message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Text
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Text;

                /**
                 * Decodes a Text message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Text
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Text;

                /**
                 * Verifies a Text message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Text message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Text
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Text;

                /**
                 * Creates a plain object from a Text message. Also converts values to other types if specified.
                 * @param message Text
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Text to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Face. */
            interface IFace {

                /** Face Index */
                Index?: (number|null);

                /** Face Old */
                Old?: (Uint8Array|null);

                /** Face Buff */
                Buff?: (Uint8Array|null);
            }

            /** Represents a Face. */
            class Face implements IFace {

                /**
                 * Constructs a new Face.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IFace);

                /** Face Index. */
                public Index: number;

                /** Face Old. */
                public Old: Uint8Array;

                /** Face Buff. */
                public Buff: Uint8Array;

                /**
                 * Creates a new Face instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Face instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IFace): Msg.MsgField.ImMsgBody.Face;

                /**
                 * Encodes the specified Face message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Face.verify|verify} messages.
                 * @param message Face message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Face message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Face.verify|verify} messages.
                 * @param message Face message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Face message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Face
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Face;

                /**
                 * Decodes a Face message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Face
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Face;

                /**
                 * Verifies a Face message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Face message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Face
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Face;

                /**
                 * Creates a plain object from a Face message. Also converts values to other types if specified.
                 * @param message Face
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Face, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Face to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OnlineImage. */
            interface IOnlineImage {

                /** OnlineImage Guid */
                Guid?: (Uint8Array|null);

                /** OnlineImage FilePath */
                FilePath?: (Uint8Array|null);

                /** OnlineImage OldVerSendFile */
                OldVerSendFile?: (Uint8Array|null);
            }

            /** Represents an OnlineImage. */
            class OnlineImage implements IOnlineImage {

                /**
                 * Constructs a new OnlineImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IOnlineImage);

                /** OnlineImage Guid. */
                public Guid: Uint8Array;

                /** OnlineImage FilePath. */
                public FilePath: Uint8Array;

                /** OnlineImage OldVerSendFile. */
                public OldVerSendFile: Uint8Array;

                /**
                 * Creates a new OnlineImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OnlineImage instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IOnlineImage): Msg.MsgField.ImMsgBody.OnlineImage;

                /**
                 * Encodes the specified OnlineImage message. Does not implicitly {@link Msg.MsgField.ImMsgBody.OnlineImage.verify|verify} messages.
                 * @param message OnlineImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IOnlineImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OnlineImage message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.OnlineImage.verify|verify} messages.
                 * @param message OnlineImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IOnlineImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OnlineImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OnlineImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.OnlineImage;

                /**
                 * Decodes an OnlineImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OnlineImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.OnlineImage;

                /**
                 * Verifies an OnlineImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OnlineImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OnlineImage
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.OnlineImage;

                /**
                 * Creates a plain object from an OnlineImage message. Also converts values to other types if specified.
                 * @param message OnlineImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.OnlineImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OnlineImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotOnlineImage. */
            interface INotOnlineImage {

                /** NotOnlineImage FilePath */
                FilePath?: (string|null);

                /** NotOnlineImage FileLen */
                FileLen?: (number|null);

                /** NotOnlineImage DownloadPath */
                DownloadPath?: (string|null);

                /** NotOnlineImage OldVerSendFile */
                OldVerSendFile?: (Uint8Array|null);

                /** NotOnlineImage ImgType */
                ImgType?: (number|null);

                /** NotOnlineImage PreviewsImage */
                PreviewsImage?: (Uint8Array|null);

                /** NotOnlineImage PicMd5 */
                PicMd5?: (Uint8Array|null);

                /** NotOnlineImage PicHeight */
                PicHeight?: (number|null);

                /** NotOnlineImage PicWidth */
                PicWidth?: (number|null);

                /** NotOnlineImage ResId */
                ResId?: (string|null);

                /** NotOnlineImage Flag */
                Flag?: (Uint8Array|null);

                /** NotOnlineImage ThumbUrl */
                ThumbUrl?: (string|null);

                /** NotOnlineImage Original */
                Original?: (number|null);

                /** NotOnlineImage BigUrl */
                BigUrl?: (string|null);

                /** NotOnlineImage OrigUrl */
                OrigUrl?: (string|null);

                /** NotOnlineImage BizType */
                BizType?: (number|null);

                /** NotOnlineImage Result */
                Result?: (number|null);

                /** NotOnlineImage Index */
                Index?: (number|null);

                /** NotOnlineImage OpFaceBuf */
                OpFaceBuf?: (Uint8Array|null);

                /** NotOnlineImage OldPicMd5 */
                OldPicMd5?: (boolean|null);

                /** NotOnlineImage ThumbWidth */
                ThumbWidth?: (number|null);

                /** NotOnlineImage ThumbHeight */
                ThumbHeight?: (number|null);

                /** NotOnlineImage FileId */
                FileId?: (number|null);

                /** NotOnlineImage ShowLen */
                ShowLen?: (number|null);

                /** NotOnlineImage DownloadLen */
                DownloadLen?: (number|null);

                /** NotOnlineImage Url */
                Url?: (string|null);

                /** NotOnlineImage Width */
                Width?: (string|null);

                /** NotOnlineImage Height */
                Height?: (string|null);

                /** NotOnlineImage PbReserve */
                PbReserve?: (boolean|null);
            }

            /** Represents a NotOnlineImage. */
            class NotOnlineImage implements INotOnlineImage {

                /**
                 * Constructs a new NotOnlineImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.INotOnlineImage);

                /** NotOnlineImage FilePath. */
                public FilePath: string;

                /** NotOnlineImage FileLen. */
                public FileLen: number;

                /** NotOnlineImage DownloadPath. */
                public DownloadPath: string;

                /** NotOnlineImage OldVerSendFile. */
                public OldVerSendFile: Uint8Array;

                /** NotOnlineImage ImgType. */
                public ImgType: number;

                /** NotOnlineImage PreviewsImage. */
                public PreviewsImage: Uint8Array;

                /** NotOnlineImage PicMd5. */
                public PicMd5: Uint8Array;

                /** NotOnlineImage PicHeight. */
                public PicHeight: number;

                /** NotOnlineImage PicWidth. */
                public PicWidth: number;

                /** NotOnlineImage ResId. */
                public ResId: string;

                /** NotOnlineImage Flag. */
                public Flag: Uint8Array;

                /** NotOnlineImage ThumbUrl. */
                public ThumbUrl: string;

                /** NotOnlineImage Original. */
                public Original: number;

                /** NotOnlineImage BigUrl. */
                public BigUrl: string;

                /** NotOnlineImage OrigUrl. */
                public OrigUrl: string;

                /** NotOnlineImage BizType. */
                public BizType: number;

                /** NotOnlineImage Result. */
                public Result: number;

                /** NotOnlineImage Index. */
                public Index: number;

                /** NotOnlineImage OpFaceBuf. */
                public OpFaceBuf: Uint8Array;

                /** NotOnlineImage OldPicMd5. */
                public OldPicMd5: boolean;

                /** NotOnlineImage ThumbWidth. */
                public ThumbWidth: number;

                /** NotOnlineImage ThumbHeight. */
                public ThumbHeight: number;

                /** NotOnlineImage FileId. */
                public FileId: number;

                /** NotOnlineImage ShowLen. */
                public ShowLen: number;

                /** NotOnlineImage DownloadLen. */
                public DownloadLen: number;

                /** NotOnlineImage Url. */
                public Url: string;

                /** NotOnlineImage Width. */
                public Width: string;

                /** NotOnlineImage Height. */
                public Height: string;

                /** NotOnlineImage PbReserve. */
                public PbReserve: boolean;

                /**
                 * Creates a new NotOnlineImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotOnlineImage instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.INotOnlineImage): Msg.MsgField.ImMsgBody.NotOnlineImage;

                /**
                 * Encodes the specified NotOnlineImage message. Does not implicitly {@link Msg.MsgField.ImMsgBody.NotOnlineImage.verify|verify} messages.
                 * @param message NotOnlineImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.INotOnlineImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotOnlineImage message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.NotOnlineImage.verify|verify} messages.
                 * @param message NotOnlineImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.INotOnlineImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotOnlineImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotOnlineImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.NotOnlineImage;

                /**
                 * Decodes a NotOnlineImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotOnlineImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.NotOnlineImage;

                /**
                 * Verifies a NotOnlineImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotOnlineImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotOnlineImage
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.NotOnlineImage;

                /**
                 * Creates a plain object from a NotOnlineImage message. Also converts values to other types if specified.
                 * @param message NotOnlineImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.NotOnlineImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotOnlineImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TransElemInfo. */
            interface ITransElemInfo {

                /** TransElemInfo ElemType */
                ElemType?: (number|null);

                /** TransElemInfo ElemValue */
                ElemValue?: (Uint8Array|null);
            }

            /** Represents a TransElemInfo. */
            class TransElemInfo implements ITransElemInfo {

                /**
                 * Constructs a new TransElemInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ITransElemInfo);

                /** TransElemInfo ElemType. */
                public ElemType: number;

                /** TransElemInfo ElemValue. */
                public ElemValue: Uint8Array;

                /**
                 * Creates a new TransElemInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransElemInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ITransElemInfo): Msg.MsgField.ImMsgBody.TransElemInfo;

                /**
                 * Encodes the specified TransElemInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.TransElemInfo.verify|verify} messages.
                 * @param message TransElemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ITransElemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransElemInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.TransElemInfo.verify|verify} messages.
                 * @param message TransElemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ITransElemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransElemInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransElemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.TransElemInfo;

                /**
                 * Decodes a TransElemInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransElemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.TransElemInfo;

                /**
                 * Verifies a TransElemInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransElemInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransElemInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.TransElemInfo;

                /**
                 * Creates a plain object from a TransElemInfo message. Also converts values to other types if specified.
                 * @param message TransElemInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.TransElemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransElemInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MarketFace. */
            interface IMarketFace {

                /** MarketFace FaceName */
                FaceName?: (Uint8Array|null);

                /** MarketFace ItemType */
                ItemType?: (number|null);

                /** MarketFace FaceInfo */
                FaceInfo?: (number|null);

                /** MarketFace FaceId */
                FaceId?: (Uint8Array|null);

                /** MarketFace TabId */
                TabId?: (number|null);

                /** MarketFace SubType */
                SubType?: (number|null);

                /** MarketFace Key */
                Key?: (Uint8Array|null);

                /** MarketFace Param */
                Param?: (Uint8Array|null);

                /** MarketFace MediaType */
                MediaType?: (number|null);

                /** MarketFace ImageWidth */
                ImageWidth?: (number|null);

                /** MarketFace ImageHeight */
                ImageHeight?: (number|null);

                /** MarketFace Mobileparam */
                Mobileparam?: (Uint8Array|null);

                /** MarketFace PbReserve */
                PbReserve?: (Uint8Array|null);
            }

            /** Represents a MarketFace. */
            class MarketFace implements IMarketFace {

                /**
                 * Constructs a new MarketFace.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IMarketFace);

                /** MarketFace FaceName. */
                public FaceName: Uint8Array;

                /** MarketFace ItemType. */
                public ItemType: number;

                /** MarketFace FaceInfo. */
                public FaceInfo: number;

                /** MarketFace FaceId. */
                public FaceId: Uint8Array;

                /** MarketFace TabId. */
                public TabId: number;

                /** MarketFace SubType. */
                public SubType: number;

                /** MarketFace Key. */
                public Key: Uint8Array;

                /** MarketFace Param. */
                public Param: Uint8Array;

                /** MarketFace MediaType. */
                public MediaType: number;

                /** MarketFace ImageWidth. */
                public ImageWidth: number;

                /** MarketFace ImageHeight. */
                public ImageHeight: number;

                /** MarketFace Mobileparam. */
                public Mobileparam: Uint8Array;

                /** MarketFace PbReserve. */
                public PbReserve: Uint8Array;

                /**
                 * Creates a new MarketFace instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MarketFace instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IMarketFace): Msg.MsgField.ImMsgBody.MarketFace;

                /**
                 * Encodes the specified MarketFace message. Does not implicitly {@link Msg.MsgField.ImMsgBody.MarketFace.verify|verify} messages.
                 * @param message MarketFace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IMarketFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MarketFace message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.MarketFace.verify|verify} messages.
                 * @param message MarketFace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IMarketFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MarketFace message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MarketFace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.MarketFace;

                /**
                 * Decodes a MarketFace message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MarketFace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.MarketFace;

                /**
                 * Verifies a MarketFace message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MarketFace message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MarketFace
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.MarketFace;

                /**
                 * Creates a plain object from a MarketFace message. Also converts values to other types if specified.
                 * @param message MarketFace
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.MarketFace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MarketFace to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ElemFlags. */
            interface IElemFlags {

                /** ElemFlags Flags */
                Flags?: (Uint8Array|null);

                /** ElemFlags BusinessData */
                BusinessData?: (Uint8Array|null);
            }

            /** Represents an ElemFlags. */
            class ElemFlags implements IElemFlags {

                /**
                 * Constructs a new ElemFlags.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IElemFlags);

                /** ElemFlags Flags. */
                public Flags: Uint8Array;

                /** ElemFlags BusinessData. */
                public BusinessData: Uint8Array;

                /**
                 * Creates a new ElemFlags instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ElemFlags instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IElemFlags): Msg.MsgField.ImMsgBody.ElemFlags;

                /**
                 * Encodes the specified ElemFlags message. Does not implicitly {@link Msg.MsgField.ImMsgBody.ElemFlags.verify|verify} messages.
                 * @param message ElemFlags message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IElemFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ElemFlags message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.ElemFlags.verify|verify} messages.
                 * @param message ElemFlags message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IElemFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ElemFlags message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ElemFlags
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.ElemFlags;

                /**
                 * Decodes an ElemFlags message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ElemFlags
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.ElemFlags;

                /**
                 * Verifies an ElemFlags message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ElemFlags message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ElemFlags
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.ElemFlags;

                /**
                 * Creates a plain object from an ElemFlags message. Also converts values to other types if specified.
                 * @param message ElemFlags
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.ElemFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ElemFlags to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CustomFace. */
            interface ICustomFace {

                /** CustomFace Guid */
                Guid?: (Uint8Array|null);

                /** CustomFace FilePath */
                FilePath?: (string|null);

                /** CustomFace Shortcut */
                Shortcut?: (string|null);

                /** CustomFace Buffer */
                Buffer?: (Uint8Array|null);

                /** CustomFace Flag */
                Flag?: (Uint8Array|null);

                /** CustomFace OldData */
                OldData?: (Uint8Array|null);

                /** CustomFace FileId */
                FileId?: (number|null);

                /** CustomFace ServerIp */
                ServerIp?: (number|null);

                /** CustomFace ServerPort */
                ServerPort?: (number|null);

                /** CustomFace FileType */
                FileType?: (number|null);

                /** CustomFace Signature */
                Signature?: (Uint8Array|null);

                /** CustomFace Useful */
                Useful?: (number|null);

                /** CustomFace Md5 */
                Md5?: (Uint8Array|null);

                /** CustomFace ThumbUrl */
                ThumbUrl?: (string|null);

                /** CustomFace BigUrl */
                BigUrl?: (string|null);

                /** CustomFace OrigUrl */
                OrigUrl?: (string|null);

                /** CustomFace BizType */
                BizType?: (number|null);

                /** CustomFace RepeatIndex */
                RepeatIndex?: (number|null);

                /** CustomFace RepeatImage */
                RepeatImage?: (number|null);

                /** CustomFace ImageType */
                ImageType?: (number|null);

                /** CustomFace Index */
                Index?: (number|null);

                /** CustomFace Width */
                Width?: (number|null);

                /** CustomFace Height */
                Height?: (number|null);

                /** CustomFace Source */
                Source?: (number|null);

                /** CustomFace Size */
                Size?: (number|null);

                /** CustomFace Origin */
                Origin?: (number|null);

                /** CustomFace ThumbWidth */
                ThumbWidth?: (number|null);

                /** CustomFace ThumbHeight */
                ThumbHeight?: (number|null);

                /** CustomFace ShowLen */
                ShowLen?: (number|null);

                /** CustomFace DownloadLen */
                DownloadLen?: (number|null);

                /** CustomFace Url */
                Url?: (string|null);

                /** CustomFace OtherWidth */
                OtherWidth?: (number|null);

                /** CustomFace OtherHeight */
                OtherHeight?: (number|null);

                /** CustomFace PbReserve */
                PbReserve?: (Uint8Array|null);
            }

            /** Represents a CustomFace. */
            class CustomFace implements ICustomFace {

                /**
                 * Constructs a new CustomFace.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ICustomFace);

                /** CustomFace Guid. */
                public Guid: Uint8Array;

                /** CustomFace FilePath. */
                public FilePath: string;

                /** CustomFace Shortcut. */
                public Shortcut: string;

                /** CustomFace Buffer. */
                public Buffer: Uint8Array;

                /** CustomFace Flag. */
                public Flag: Uint8Array;

                /** CustomFace OldData. */
                public OldData: Uint8Array;

                /** CustomFace FileId. */
                public FileId: number;

                /** CustomFace ServerIp. */
                public ServerIp: number;

                /** CustomFace ServerPort. */
                public ServerPort: number;

                /** CustomFace FileType. */
                public FileType: number;

                /** CustomFace Signature. */
                public Signature: Uint8Array;

                /** CustomFace Useful. */
                public Useful: number;

                /** CustomFace Md5. */
                public Md5: Uint8Array;

                /** CustomFace ThumbUrl. */
                public ThumbUrl: string;

                /** CustomFace BigUrl. */
                public BigUrl: string;

                /** CustomFace OrigUrl. */
                public OrigUrl: string;

                /** CustomFace BizType. */
                public BizType: number;

                /** CustomFace RepeatIndex. */
                public RepeatIndex: number;

                /** CustomFace RepeatImage. */
                public RepeatImage: number;

                /** CustomFace ImageType. */
                public ImageType: number;

                /** CustomFace Index. */
                public Index: number;

                /** CustomFace Width. */
                public Width: number;

                /** CustomFace Height. */
                public Height: number;

                /** CustomFace Source. */
                public Source: number;

                /** CustomFace Size. */
                public Size: number;

                /** CustomFace Origin. */
                public Origin: number;

                /** CustomFace ThumbWidth. */
                public ThumbWidth: number;

                /** CustomFace ThumbHeight. */
                public ThumbHeight: number;

                /** CustomFace ShowLen. */
                public ShowLen: number;

                /** CustomFace DownloadLen. */
                public DownloadLen: number;

                /** CustomFace Url. */
                public Url: string;

                /** CustomFace OtherWidth. */
                public OtherWidth: number;

                /** CustomFace OtherHeight. */
                public OtherHeight: number;

                /** CustomFace PbReserve. */
                public PbReserve: Uint8Array;

                /**
                 * Creates a new CustomFace instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomFace instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ICustomFace): Msg.MsgField.ImMsgBody.CustomFace;

                /**
                 * Encodes the specified CustomFace message. Does not implicitly {@link Msg.MsgField.ImMsgBody.CustomFace.verify|verify} messages.
                 * @param message CustomFace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ICustomFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustomFace message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.CustomFace.verify|verify} messages.
                 * @param message CustomFace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ICustomFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomFace message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustomFace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.CustomFace;

                /**
                 * Decodes a CustomFace message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustomFace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.CustomFace;

                /**
                 * Verifies a CustomFace message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustomFace message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustomFace
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.CustomFace;

                /**
                 * Creates a plain object from a CustomFace message. Also converts values to other types if specified.
                 * @param message CustomFace
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.CustomFace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustomFace to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Inst. */
            interface IInst {

                /** Inst AppId */
                AppId?: (number|null);

                /** Inst InstId */
                InstId?: (number|null);
            }

            /** Represents an Inst. */
            class Inst implements IInst {

                /**
                 * Constructs a new Inst.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IInst);

                /** Inst AppId. */
                public AppId: number;

                /** Inst InstId. */
                public InstId: number;

                /**
                 * Creates a new Inst instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Inst instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IInst): Msg.MsgField.ImMsgBody.Inst;

                /**
                 * Encodes the specified Inst message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Inst.verify|verify} messages.
                 * @param message Inst message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IInst, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Inst message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Inst.verify|verify} messages.
                 * @param message Inst message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IInst, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Inst message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Inst
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Inst;

                /**
                 * Decodes an Inst message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Inst
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Inst;

                /**
                 * Verifies an Inst message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Inst message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Inst
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Inst;

                /**
                 * Creates a plain object from an Inst message. Also converts values to other types if specified.
                 * @param message Inst
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Inst, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Inst to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PcSupportDef. */
            interface IPcSupportDef {

                /** PcSupportDef PcPtlBegin */
                PcPtlBegin?: (number|null);

                /** PcSupportDef PcPtlEnd */
                PcPtlEnd?: (number|null);

                /** PcSupportDef MacPtlBegin */
                MacPtlBegin?: (number|null);

                /** PcSupportDef MacPtlEnd */
                MacPtlEnd?: (number|null);

                /** PcSupportDef PtlsSupport */
                PtlsSupport?: (number[]|null);

                /** PcSupportDef PtlsNotSupport */
                PtlsNotSupport?: (number[]|null);
            }

            /** Represents a PcSupportDef. */
            class PcSupportDef implements IPcSupportDef {

                /**
                 * Constructs a new PcSupportDef.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IPcSupportDef);

                /** PcSupportDef PcPtlBegin. */
                public PcPtlBegin: number;

                /** PcSupportDef PcPtlEnd. */
                public PcPtlEnd: number;

                /** PcSupportDef MacPtlBegin. */
                public MacPtlBegin: number;

                /** PcSupportDef MacPtlEnd. */
                public MacPtlEnd: number;

                /** PcSupportDef PtlsSupport. */
                public PtlsSupport: number[];

                /** PcSupportDef PtlsNotSupport. */
                public PtlsNotSupport: number[];

                /**
                 * Creates a new PcSupportDef instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PcSupportDef instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IPcSupportDef): Msg.MsgField.ImMsgBody.PcSupportDef;

                /**
                 * Encodes the specified PcSupportDef message. Does not implicitly {@link Msg.MsgField.ImMsgBody.PcSupportDef.verify|verify} messages.
                 * @param message PcSupportDef message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IPcSupportDef, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PcSupportDef message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.PcSupportDef.verify|verify} messages.
                 * @param message PcSupportDef message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IPcSupportDef, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PcSupportDef message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PcSupportDef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.PcSupportDef;

                /**
                 * Decodes a PcSupportDef message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PcSupportDef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.PcSupportDef;

                /**
                 * Verifies a PcSupportDef message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PcSupportDef message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PcSupportDef
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.PcSupportDef;

                /**
                 * Creates a plain object from a PcSupportDef message. Also converts values to other types if specified.
                 * @param message PcSupportDef
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.PcSupportDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PcSupportDef to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ElemFlags2. */
            interface IElemFlags2 {

                /** ElemFlags2 ColorTextId */
                ColorTextId?: (number|null);

                /** ElemFlags2 MsgId */
                MsgId?: (number|Long|null);

                /** ElemFlags2 WhisperSessionId */
                WhisperSessionId?: (number|null);

                /** ElemFlags2 PttChangeBit */
                PttChangeBit?: (number|null);

                /** ElemFlags2 VipStatus */
                VipStatus?: (number|null);

                /** ElemFlags2 CompatibleId */
                CompatibleId?: (number|null);

                /** ElemFlags2 Insts */
                Insts?: (Msg.MsgField.ImMsgBody.IInst[]|null);

                /** ElemFlags2 MsgRptCnt */
                MsgRptCnt?: (number|null);

                /** ElemFlags2 SrcInst */
                SrcInst?: (Msg.MsgField.ImMsgBody.IInst|null);

                /** ElemFlags2 Longtitude */
                Longtitude?: (number|null);

                /** ElemFlags2 Latitude */
                Latitude?: (number|null);

                /** ElemFlags2 CustomFont */
                CustomFont?: (number|null);

                /** ElemFlags2 PcSupportDef */
                PcSupportDef?: (Msg.MsgField.ImMsgBody.IPcSupportDef|null);

                /** ElemFlags2 CrmFlags */
                CrmFlags?: (number|null);
            }

            /** Represents an ElemFlags2. */
            class ElemFlags2 implements IElemFlags2 {

                /**
                 * Constructs a new ElemFlags2.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IElemFlags2);

                /** ElemFlags2 ColorTextId. */
                public ColorTextId: number;

                /** ElemFlags2 MsgId. */
                public MsgId: (number|Long);

                /** ElemFlags2 WhisperSessionId. */
                public WhisperSessionId: number;

                /** ElemFlags2 PttChangeBit. */
                public PttChangeBit: number;

                /** ElemFlags2 VipStatus. */
                public VipStatus: number;

                /** ElemFlags2 CompatibleId. */
                public CompatibleId: number;

                /** ElemFlags2 Insts. */
                public Insts: Msg.MsgField.ImMsgBody.IInst[];

                /** ElemFlags2 MsgRptCnt. */
                public MsgRptCnt: number;

                /** ElemFlags2 SrcInst. */
                public SrcInst?: (Msg.MsgField.ImMsgBody.IInst|null);

                /** ElemFlags2 Longtitude. */
                public Longtitude: number;

                /** ElemFlags2 Latitude. */
                public Latitude: number;

                /** ElemFlags2 CustomFont. */
                public CustomFont: number;

                /** ElemFlags2 PcSupportDef. */
                public PcSupportDef?: (Msg.MsgField.ImMsgBody.IPcSupportDef|null);

                /** ElemFlags2 CrmFlags. */
                public CrmFlags: number;

                /**
                 * Creates a new ElemFlags2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ElemFlags2 instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IElemFlags2): Msg.MsgField.ImMsgBody.ElemFlags2;

                /**
                 * Encodes the specified ElemFlags2 message. Does not implicitly {@link Msg.MsgField.ImMsgBody.ElemFlags2.verify|verify} messages.
                 * @param message ElemFlags2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IElemFlags2, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ElemFlags2 message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.ElemFlags2.verify|verify} messages.
                 * @param message ElemFlags2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IElemFlags2, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ElemFlags2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ElemFlags2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.ElemFlags2;

                /**
                 * Decodes an ElemFlags2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ElemFlags2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.ElemFlags2;

                /**
                 * Verifies an ElemFlags2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ElemFlags2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ElemFlags2
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.ElemFlags2;

                /**
                 * Creates a plain object from an ElemFlags2 message. Also converts values to other types if specified.
                 * @param message ElemFlags2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.ElemFlags2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ElemFlags2 to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Turntable. */
            interface ITurntable {

                /** Turntable Uint64UinList */
                Uint64UinList?: ((number|Long)[]|null);

                /** Turntable HitUin */
                HitUin?: (number|Long|null);

                /** Turntable HitUinNick */
                HitUinNick?: (string|null);
            }

            /** Represents a Turntable. */
            class Turntable implements ITurntable {

                /**
                 * Constructs a new Turntable.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ITurntable);

                /** Turntable Uint64UinList. */
                public Uint64UinList: (number|Long)[];

                /** Turntable HitUin. */
                public HitUin: (number|Long);

                /** Turntable HitUinNick. */
                public HitUinNick: string;

                /**
                 * Creates a new Turntable instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Turntable instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ITurntable): Msg.MsgField.ImMsgBody.Turntable;

                /**
                 * Encodes the specified Turntable message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Turntable.verify|verify} messages.
                 * @param message Turntable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ITurntable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Turntable message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Turntable.verify|verify} messages.
                 * @param message Turntable message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ITurntable, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Turntable message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Turntable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Turntable;

                /**
                 * Decodes a Turntable message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Turntable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Turntable;

                /**
                 * Verifies a Turntable message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Turntable message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Turntable
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Turntable;

                /**
                 * Creates a plain object from a Turntable message. Also converts values to other types if specified.
                 * @param message Turntable
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Turntable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Turntable to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Bomb. */
            interface IBomb {

                /** Bomb BoolBurst */
                BoolBurst?: (boolean|null);
            }

            /** Represents a Bomb. */
            class Bomb implements IBomb {

                /**
                 * Constructs a new Bomb.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IBomb);

                /** Bomb BoolBurst. */
                public BoolBurst: boolean;

                /**
                 * Creates a new Bomb instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Bomb instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IBomb): Msg.MsgField.ImMsgBody.Bomb;

                /**
                 * Encodes the specified Bomb message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Bomb.verify|verify} messages.
                 * @param message Bomb message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IBomb, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Bomb message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Bomb.verify|verify} messages.
                 * @param message Bomb message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IBomb, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Bomb message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Bomb
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Bomb;

                /**
                 * Decodes a Bomb message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Bomb
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Bomb;

                /**
                 * Verifies a Bomb message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Bomb message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Bomb
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Bomb;

                /**
                 * Creates a plain object from a Bomb message. Also converts values to other types if specified.
                 * @param message Bomb
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Bomb, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Bomb to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FunFace. */
            interface IFunFace {

                /** FunFace MsgTurntable */
                MsgTurntable?: (Msg.MsgField.ImMsgBody.ITurntable|null);

                /** FunFace MsgBomb */
                MsgBomb?: (Msg.MsgField.ImMsgBody.IBomb|null);
            }

            /** Represents a FunFace. */
            class FunFace implements IFunFace {

                /**
                 * Constructs a new FunFace.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IFunFace);

                /** FunFace MsgTurntable. */
                public MsgTurntable?: (Msg.MsgField.ImMsgBody.ITurntable|null);

                /** FunFace MsgBomb. */
                public MsgBomb?: (Msg.MsgField.ImMsgBody.IBomb|null);

                /**
                 * Creates a new FunFace instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FunFace instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IFunFace): Msg.MsgField.ImMsgBody.FunFace;

                /**
                 * Encodes the specified FunFace message. Does not implicitly {@link Msg.MsgField.ImMsgBody.FunFace.verify|verify} messages.
                 * @param message FunFace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IFunFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FunFace message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.FunFace.verify|verify} messages.
                 * @param message FunFace message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IFunFace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FunFace message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FunFace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.FunFace;

                /**
                 * Decodes a FunFace message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FunFace
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.FunFace;

                /**
                 * Verifies a FunFace message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FunFace message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FunFace
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.FunFace;

                /**
                 * Creates a plain object from a FunFace message. Also converts values to other types if specified.
                 * @param message FunFace
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.FunFace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FunFace to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SecretFileMsg. */
            interface ISecretFileMsg {

                /** SecretFileMsg FileKey */
                FileKey?: (boolean|null);

                /** SecretFileMsg FromUin */
                FromUin?: (number|Long|null);

                /** SecretFileMsg ToUin */
                ToUin?: (number|Long|null);

                /** SecretFileMsg Status */
                Status?: (number|null);

                /** SecretFileMsg Ttl */
                Ttl?: (number|null);

                /** SecretFileMsg Type */
                Type?: (number|null);

                /** SecretFileMsg EncryptPreheadLength */
                EncryptPreheadLength?: (number|null);

                /** SecretFileMsg EncryptType */
                EncryptType?: (number|null);

                /** SecretFileMsg EncryptKey */
                EncryptKey?: (Uint8Array|null);

                /** SecretFileMsg ReadTimes */
                ReadTimes?: (number|null);

                /** SecretFileMsg LeftTime */
                LeftTime?: (number|null);

                /** SecretFileMsg NotOnlineImage */
                NotOnlineImage?: (Msg.MsgField.ImMsgBody.INotOnlineImage|null);

                /** SecretFileMsg ElemFlags2 */
                ElemFlags2?: (Msg.MsgField.ImMsgBody.IElemFlags2|null);

                /** SecretFileMsg Opertype */
                Opertype?: (number|null);

                /** SecretFileMsg Fromphonenum */
                Fromphonenum?: (string|null);
            }

            /** Represents a SecretFileMsg. */
            class SecretFileMsg implements ISecretFileMsg {

                /**
                 * Constructs a new SecretFileMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ISecretFileMsg);

                /** SecretFileMsg FileKey. */
                public FileKey: boolean;

                /** SecretFileMsg FromUin. */
                public FromUin: (number|Long);

                /** SecretFileMsg ToUin. */
                public ToUin: (number|Long);

                /** SecretFileMsg Status. */
                public Status: number;

                /** SecretFileMsg Ttl. */
                public Ttl: number;

                /** SecretFileMsg Type. */
                public Type: number;

                /** SecretFileMsg EncryptPreheadLength. */
                public EncryptPreheadLength: number;

                /** SecretFileMsg EncryptType. */
                public EncryptType: number;

                /** SecretFileMsg EncryptKey. */
                public EncryptKey: Uint8Array;

                /** SecretFileMsg ReadTimes. */
                public ReadTimes: number;

                /** SecretFileMsg LeftTime. */
                public LeftTime: number;

                /** SecretFileMsg NotOnlineImage. */
                public NotOnlineImage?: (Msg.MsgField.ImMsgBody.INotOnlineImage|null);

                /** SecretFileMsg ElemFlags2. */
                public ElemFlags2?: (Msg.MsgField.ImMsgBody.IElemFlags2|null);

                /** SecretFileMsg Opertype. */
                public Opertype: number;

                /** SecretFileMsg Fromphonenum. */
                public Fromphonenum: string;

                /**
                 * Creates a new SecretFileMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SecretFileMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ISecretFileMsg): Msg.MsgField.ImMsgBody.SecretFileMsg;

                /**
                 * Encodes the specified SecretFileMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.SecretFileMsg.verify|verify} messages.
                 * @param message SecretFileMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ISecretFileMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SecretFileMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.SecretFileMsg.verify|verify} messages.
                 * @param message SecretFileMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ISecretFileMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SecretFileMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SecretFileMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.SecretFileMsg;

                /**
                 * Decodes a SecretFileMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SecretFileMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.SecretFileMsg;

                /**
                 * Verifies a SecretFileMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SecretFileMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SecretFileMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.SecretFileMsg;

                /**
                 * Creates a plain object from a SecretFileMsg message. Also converts values to other types if specified.
                 * @param message SecretFileMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.SecretFileMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SecretFileMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RichMsg. */
            interface IRichMsg {

                /** RichMsg Template */
                Template?: (Uint8Array|null);

                /** RichMsg ServiceId */
                ServiceId?: (number|null);

                /** RichMsg MsgResid */
                MsgResid?: (Uint8Array|null);

                /** RichMsg Rand */
                Rand?: (number|null);

                /** RichMsg Seq */
                Seq?: (number|null);

                /** RichMsg Flags */
                Flags?: (number|null);
            }

            /** Represents a RichMsg. */
            class RichMsg implements IRichMsg {

                /**
                 * Constructs a new RichMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IRichMsg);

                /** RichMsg Template. */
                public Template: Uint8Array;

                /** RichMsg ServiceId. */
                public ServiceId: number;

                /** RichMsg MsgResid. */
                public MsgResid: Uint8Array;

                /** RichMsg Rand. */
                public Rand: number;

                /** RichMsg Seq. */
                public Seq: number;

                /** RichMsg Flags. */
                public Flags: number;

                /**
                 * Creates a new RichMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RichMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IRichMsg): Msg.MsgField.ImMsgBody.RichMsg;

                /**
                 * Encodes the specified RichMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.RichMsg.verify|verify} messages.
                 * @param message RichMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IRichMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RichMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.RichMsg.verify|verify} messages.
                 * @param message RichMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IRichMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RichMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RichMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.RichMsg;

                /**
                 * Decodes a RichMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RichMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.RichMsg;

                /**
                 * Verifies a RichMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RichMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RichMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.RichMsg;

                /**
                 * Creates a plain object from a RichMsg message. Also converts values to other types if specified.
                 * @param message RichMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.RichMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RichMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GroupFile. */
            interface IGroupFile {

                /** GroupFile Filename */
                Filename?: (Uint8Array|null);

                /** GroupFile FileSize */
                FileSize?: (number|Long|null);

                /** GroupFile FileId */
                FileId?: (Uint8Array|null);

                /** GroupFile BatchId */
                BatchId?: (Uint8Array|null);

                /** GroupFile FileKey */
                FileKey?: (Uint8Array|null);

                /** GroupFile Mark */
                Mark?: (Uint8Array|null);

                /** GroupFile Sequence */
                Sequence?: (number|Long|null);

                /** GroupFile BatchItemId */
                BatchItemId?: (Uint8Array|null);

                /** GroupFile FeedMsgTime */
                FeedMsgTime?: (number|null);

                /** GroupFile PbReserve */
                PbReserve?: (Uint8Array|null);
            }

            /** Represents a GroupFile. */
            class GroupFile implements IGroupFile {

                /**
                 * Constructs a new GroupFile.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IGroupFile);

                /** GroupFile Filename. */
                public Filename: Uint8Array;

                /** GroupFile FileSize. */
                public FileSize: (number|Long);

                /** GroupFile FileId. */
                public FileId: Uint8Array;

                /** GroupFile BatchId. */
                public BatchId: Uint8Array;

                /** GroupFile FileKey. */
                public FileKey: Uint8Array;

                /** GroupFile Mark. */
                public Mark: Uint8Array;

                /** GroupFile Sequence. */
                public Sequence: (number|Long);

                /** GroupFile BatchItemId. */
                public BatchItemId: Uint8Array;

                /** GroupFile FeedMsgTime. */
                public FeedMsgTime: number;

                /** GroupFile PbReserve. */
                public PbReserve: Uint8Array;

                /**
                 * Creates a new GroupFile instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupFile instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IGroupFile): Msg.MsgField.ImMsgBody.GroupFile;

                /**
                 * Encodes the specified GroupFile message. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupFile.verify|verify} messages.
                 * @param message GroupFile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IGroupFile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupFile message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupFile.verify|verify} messages.
                 * @param message GroupFile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IGroupFile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupFile message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.GroupFile;

                /**
                 * Decodes a GroupFile message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.GroupFile;

                /**
                 * Verifies a GroupFile message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupFile message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupFile
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.GroupFile;

                /**
                 * Creates a plain object from a GroupFile message. Also converts values to other types if specified.
                 * @param message GroupFile
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.GroupFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupFile to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PubGroup. */
            interface IPubGroup {

                /** PubGroup NickName */
                NickName?: (Uint8Array|null);

                /** PubGroup Gender */
                Gender?: (number|null);

                /** PubGroup Age */
                Age?: (number|null);

                /** PubGroup Distance */
                Distance?: (number|null);
            }

            /** Represents a PubGroup. */
            class PubGroup implements IPubGroup {

                /**
                 * Constructs a new PubGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IPubGroup);

                /** PubGroup NickName. */
                public NickName: Uint8Array;

                /** PubGroup Gender. */
                public Gender: number;

                /** PubGroup Age. */
                public Age: number;

                /** PubGroup Distance. */
                public Distance: number;

                /**
                 * Creates a new PubGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubGroup instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IPubGroup): Msg.MsgField.ImMsgBody.PubGroup;

                /**
                 * Encodes the specified PubGroup message. Does not implicitly {@link Msg.MsgField.ImMsgBody.PubGroup.verify|verify} messages.
                 * @param message PubGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IPubGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PubGroup message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.PubGroup.verify|verify} messages.
                 * @param message PubGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IPubGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PubGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.PubGroup;

                /**
                 * Decodes a PubGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PubGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.PubGroup;

                /**
                 * Verifies a PubGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PubGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PubGroup
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.PubGroup;

                /**
                 * Creates a plain object from a PubGroup message. Also converts values to other types if specified.
                 * @param message PubGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.PubGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PubGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MarketTrans. */
            interface IMarketTrans {

                /** MarketTrans Flag */
                Flag?: (number|null);

                /** MarketTrans Xml */
                Xml?: (Uint8Array|null);

                /** MarketTrans MsgResId */
                MsgResId?: (Uint8Array|null);

                /** MarketTrans Ability */
                Ability?: (number|null);

                /** MarketTrans MinAbility */
                MinAbility?: (number|null);
            }

            /** Represents a MarketTrans. */
            class MarketTrans implements IMarketTrans {

                /**
                 * Constructs a new MarketTrans.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IMarketTrans);

                /** MarketTrans Flag. */
                public Flag: number;

                /** MarketTrans Xml. */
                public Xml: Uint8Array;

                /** MarketTrans MsgResId. */
                public MsgResId: Uint8Array;

                /** MarketTrans Ability. */
                public Ability: number;

                /** MarketTrans MinAbility. */
                public MinAbility: number;

                /**
                 * Creates a new MarketTrans instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MarketTrans instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IMarketTrans): Msg.MsgField.ImMsgBody.MarketTrans;

                /**
                 * Encodes the specified MarketTrans message. Does not implicitly {@link Msg.MsgField.ImMsgBody.MarketTrans.verify|verify} messages.
                 * @param message MarketTrans message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IMarketTrans, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MarketTrans message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.MarketTrans.verify|verify} messages.
                 * @param message MarketTrans message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IMarketTrans, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MarketTrans message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MarketTrans
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.MarketTrans;

                /**
                 * Decodes a MarketTrans message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MarketTrans
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.MarketTrans;

                /**
                 * Verifies a MarketTrans message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MarketTrans message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MarketTrans
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.MarketTrans;

                /**
                 * Creates a plain object from a MarketTrans message. Also converts values to other types if specified.
                 * @param message MarketTrans
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.MarketTrans, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MarketTrans to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ExtraInfo. */
            interface IExtraInfo {

                /** ExtraInfo Nick */
                Nick?: (Uint8Array|null);

                /** ExtraInfo GroupCard */
                GroupCard?: (string|null);

                /** ExtraInfo Level */
                Level?: (number|null);

                /** ExtraInfo Flags */
                Flags?: (number|null);

                /** ExtraInfo GroupMask */
                GroupMask?: (number|null);

                /** ExtraInfo MsgTailid */
                MsgTailid?: (number|null);

                /** ExtraInfo Sendertitle */
                Sendertitle?: (Uint8Array|null);

                /** ExtraInfo ApnsTips */
                ApnsTips?: (Uint8Array|null);

                /** ExtraInfo Uin */
                Uin?: (number|Long|null);

                /** ExtraInfo MsgStateFlag */
                MsgStateFlag?: (number|null);

                /** ExtraInfo ApnsSoundType */
                ApnsSoundType?: (number|null);

                /** ExtraInfo Newgroupflag */
                Newgroupflag?: (number|null);
            }

            /** Represents an ExtraInfo. */
            class ExtraInfo implements IExtraInfo {

                /**
                 * Constructs a new ExtraInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IExtraInfo);

                /** ExtraInfo Nick. */
                public Nick: Uint8Array;

                /** ExtraInfo GroupCard. */
                public GroupCard: string;

                /** ExtraInfo Level. */
                public Level: number;

                /** ExtraInfo Flags. */
                public Flags: number;

                /** ExtraInfo GroupMask. */
                public GroupMask: number;

                /** ExtraInfo MsgTailid. */
                public MsgTailid: number;

                /** ExtraInfo Sendertitle. */
                public Sendertitle: Uint8Array;

                /** ExtraInfo ApnsTips. */
                public ApnsTips: Uint8Array;

                /** ExtraInfo Uin. */
                public Uin: (number|Long);

                /** ExtraInfo MsgStateFlag. */
                public MsgStateFlag: number;

                /** ExtraInfo ApnsSoundType. */
                public ApnsSoundType: number;

                /** ExtraInfo Newgroupflag. */
                public Newgroupflag: number;

                /**
                 * Creates a new ExtraInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtraInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IExtraInfo): Msg.MsgField.ImMsgBody.ExtraInfo;

                /**
                 * Encodes the specified ExtraInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.ExtraInfo.verify|verify} messages.
                 * @param message ExtraInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IExtraInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtraInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.ExtraInfo.verify|verify} messages.
                 * @param message ExtraInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IExtraInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtraInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtraInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.ExtraInfo;

                /**
                 * Decodes an ExtraInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtraInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.ExtraInfo;

                /**
                 * Verifies an ExtraInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtraInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtraInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.ExtraInfo;

                /**
                 * Creates a plain object from an ExtraInfo message. Also converts values to other types if specified.
                 * @param message ExtraInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.ExtraInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtraInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ShakeWindow. */
            interface IShakeWindow {

                /** ShakeWindow Type */
                Type?: (number|null);

                /** ShakeWindow Reserve */
                Reserve?: (number|null);

                /** ShakeWindow Uin */
                Uin?: (number|Long|null);
            }

            /** Represents a ShakeWindow. */
            class ShakeWindow implements IShakeWindow {

                /**
                 * Constructs a new ShakeWindow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IShakeWindow);

                /** ShakeWindow Type. */
                public Type: number;

                /** ShakeWindow Reserve. */
                public Reserve: number;

                /** ShakeWindow Uin. */
                public Uin: (number|Long);

                /**
                 * Creates a new ShakeWindow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShakeWindow instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IShakeWindow): Msg.MsgField.ImMsgBody.ShakeWindow;

                /**
                 * Encodes the specified ShakeWindow message. Does not implicitly {@link Msg.MsgField.ImMsgBody.ShakeWindow.verify|verify} messages.
                 * @param message ShakeWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IShakeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShakeWindow message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.ShakeWindow.verify|verify} messages.
                 * @param message ShakeWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IShakeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShakeWindow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShakeWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.ShakeWindow;

                /**
                 * Decodes a ShakeWindow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShakeWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.ShakeWindow;

                /**
                 * Verifies a ShakeWindow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShakeWindow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShakeWindow
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.ShakeWindow;

                /**
                 * Creates a plain object from a ShakeWindow message. Also converts values to other types if specified.
                 * @param message ShakeWindow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.ShakeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShakeWindow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PubAccount. */
            interface IPubAccount {

                /** PubAccount Buf */
                Buf?: (Uint8Array|null);

                /** PubAccount Pubaccountuin */
                Pubaccountuin?: (number|Long|null);
            }

            /** Represents a PubAccount. */
            class PubAccount implements IPubAccount {

                /**
                 * Constructs a new PubAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IPubAccount);

                /** PubAccount Buf. */
                public Buf: Uint8Array;

                /** PubAccount Pubaccountuin. */
                public Pubaccountuin: (number|Long);

                /**
                 * Creates a new PubAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubAccount instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IPubAccount): Msg.MsgField.ImMsgBody.PubAccount;

                /**
                 * Encodes the specified PubAccount message. Does not implicitly {@link Msg.MsgField.ImMsgBody.PubAccount.verify|verify} messages.
                 * @param message PubAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IPubAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PubAccount message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.PubAccount.verify|verify} messages.
                 * @param message PubAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IPubAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PubAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.PubAccount;

                /**
                 * Decodes a PubAccount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PubAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.PubAccount;

                /**
                 * Verifies a PubAccount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PubAccount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PubAccount
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.PubAccount;

                /**
                 * Creates a plain object from a PubAccount message. Also converts values to other types if specified.
                 * @param message PubAccount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.PubAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PubAccount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a VideoFile. */
            interface IVideoFile {

                /** VideoFile Fileuuid */
                Fileuuid?: (Uint8Array|null);

                /** VideoFile Filemd5 */
                Filemd5?: (Uint8Array|null);

                /** VideoFile Filename */
                Filename?: (Uint8Array|null);

                /** VideoFile Fileformat */
                Fileformat?: (number|null);

                /** VideoFile Filetime */
                Filetime?: (number|null);

                /** VideoFile Filesize */
                Filesize?: (number|null);

                /** VideoFile Thumbwidth */
                Thumbwidth?: (number|null);

                /** VideoFile Thumbheight */
                Thumbheight?: (number|null);

                /** VideoFile Thumbfilemd5 */
                Thumbfilemd5?: (Uint8Array|null);

                /** VideoFile Source */
                Source?: (Uint8Array|null);

                /** VideoFile Thumbfilesize */
                Thumbfilesize?: (number|null);

                /** VideoFile Busitype */
                Busitype?: (number|null);

                /** VideoFile Fromchattype */
                Fromchattype?: (number|null);

                /** VideoFile Tochattype */
                Tochattype?: (number|null);

                /** VideoFile Boolsupportprogressive */
                Boolsupportprogressive?: (boolean|null);

                /** VideoFile Filewidth */
                Filewidth?: (number|null);

                /** VideoFile Fileheight */
                Fileheight?: (number|null);

                /** VideoFile Subbusitype */
                Subbusitype?: (number|null);

                /** VideoFile Videoattr */
                Videoattr?: (number|null);

                /** VideoFile Bytesthumbfileurls */
                Bytesthumbfileurls?: (Uint8Array[]|null);

                /** VideoFile Bytesvideofileurls */
                Bytesvideofileurls?: (Uint8Array[]|null);

                /** VideoFile Thumbdownloadflag */
                Thumbdownloadflag?: (number|null);

                /** VideoFile Videodownloadflag */
                Videodownloadflag?: (number|null);

                /** VideoFile Pbreserve */
                Pbreserve?: (Uint8Array|null);
            }

            /** Represents a VideoFile. */
            class VideoFile implements IVideoFile {

                /**
                 * Constructs a new VideoFile.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IVideoFile);

                /** VideoFile Fileuuid. */
                public Fileuuid: Uint8Array;

                /** VideoFile Filemd5. */
                public Filemd5: Uint8Array;

                /** VideoFile Filename. */
                public Filename: Uint8Array;

                /** VideoFile Fileformat. */
                public Fileformat: number;

                /** VideoFile Filetime. */
                public Filetime: number;

                /** VideoFile Filesize. */
                public Filesize: number;

                /** VideoFile Thumbwidth. */
                public Thumbwidth: number;

                /** VideoFile Thumbheight. */
                public Thumbheight: number;

                /** VideoFile Thumbfilemd5. */
                public Thumbfilemd5: Uint8Array;

                /** VideoFile Source. */
                public Source: Uint8Array;

                /** VideoFile Thumbfilesize. */
                public Thumbfilesize: number;

                /** VideoFile Busitype. */
                public Busitype: number;

                /** VideoFile Fromchattype. */
                public Fromchattype: number;

                /** VideoFile Tochattype. */
                public Tochattype: number;

                /** VideoFile Boolsupportprogressive. */
                public Boolsupportprogressive: boolean;

                /** VideoFile Filewidth. */
                public Filewidth: number;

                /** VideoFile Fileheight. */
                public Fileheight: number;

                /** VideoFile Subbusitype. */
                public Subbusitype: number;

                /** VideoFile Videoattr. */
                public Videoattr: number;

                /** VideoFile Bytesthumbfileurls. */
                public Bytesthumbfileurls: Uint8Array[];

                /** VideoFile Bytesvideofileurls. */
                public Bytesvideofileurls: Uint8Array[];

                /** VideoFile Thumbdownloadflag. */
                public Thumbdownloadflag: number;

                /** VideoFile Videodownloadflag. */
                public Videodownloadflag: number;

                /** VideoFile Pbreserve. */
                public Pbreserve: Uint8Array;

                /**
                 * Creates a new VideoFile instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VideoFile instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IVideoFile): Msg.MsgField.ImMsgBody.VideoFile;

                /**
                 * Encodes the specified VideoFile message. Does not implicitly {@link Msg.MsgField.ImMsgBody.VideoFile.verify|verify} messages.
                 * @param message VideoFile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IVideoFile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VideoFile message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.VideoFile.verify|verify} messages.
                 * @param message VideoFile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IVideoFile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VideoFile message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VideoFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.VideoFile;

                /**
                 * Decodes a VideoFile message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VideoFile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.VideoFile;

                /**
                 * Verifies a VideoFile message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VideoFile message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VideoFile
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.VideoFile;

                /**
                 * Creates a plain object from a VideoFile message. Also converts values to other types if specified.
                 * @param message VideoFile
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.VideoFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VideoFile to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TipsInfo. */
            interface ITipsInfo {

                /** TipsInfo Sessiontype */
                Sessiontype?: (number|null);

                /** TipsInfo Sessionuin */
                Sessionuin?: (number|Long|null);

                /** TipsInfo Text */
                Text?: (string|null);
            }

            /** Represents a TipsInfo. */
            class TipsInfo implements ITipsInfo {

                /**
                 * Constructs a new TipsInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ITipsInfo);

                /** TipsInfo Sessiontype. */
                public Sessiontype: number;

                /** TipsInfo Sessionuin. */
                public Sessionuin: (number|Long);

                /** TipsInfo Text. */
                public Text: string;

                /**
                 * Creates a new TipsInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TipsInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ITipsInfo): Msg.MsgField.ImMsgBody.TipsInfo;

                /**
                 * Encodes the specified TipsInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.TipsInfo.verify|verify} messages.
                 * @param message TipsInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ITipsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TipsInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.TipsInfo.verify|verify} messages.
                 * @param message TipsInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ITipsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TipsInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TipsInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.TipsInfo;

                /**
                 * Decodes a TipsInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TipsInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.TipsInfo;

                /**
                 * Verifies a TipsInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TipsInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TipsInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.TipsInfo;

                /**
                 * Creates a plain object from a TipsInfo message. Also converts values to other types if specified.
                 * @param message TipsInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.TipsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TipsInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AnonGroupMsg. */
            interface IAnonGroupMsg {

                /** AnonGroupMsg Flags */
                Flags?: (number|null);

                /** AnonGroupMsg Anonid */
                Anonid?: (Uint8Array|null);

                /** AnonGroupMsg Anonnick */
                Anonnick?: (Uint8Array|null);

                /** AnonGroupMsg Headportrait */
                Headportrait?: (number|null);

                /** AnonGroupMsg Expiretime */
                Expiretime?: (number|null);

                /** AnonGroupMsg Bubbleid */
                Bubbleid?: (number|null);

                /** AnonGroupMsg Rankcolor */
                Rankcolor?: (Uint8Array|null);
            }

            /** Represents an AnonGroupMsg. */
            class AnonGroupMsg implements IAnonGroupMsg {

                /**
                 * Constructs a new AnonGroupMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IAnonGroupMsg);

                /** AnonGroupMsg Flags. */
                public Flags: number;

                /** AnonGroupMsg Anonid. */
                public Anonid: Uint8Array;

                /** AnonGroupMsg Anonnick. */
                public Anonnick: Uint8Array;

                /** AnonGroupMsg Headportrait. */
                public Headportrait: number;

                /** AnonGroupMsg Expiretime. */
                public Expiretime: number;

                /** AnonGroupMsg Bubbleid. */
                public Bubbleid: number;

                /** AnonGroupMsg Rankcolor. */
                public Rankcolor: Uint8Array;

                /**
                 * Creates a new AnonGroupMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AnonGroupMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IAnonGroupMsg): Msg.MsgField.ImMsgBody.AnonGroupMsg;

                /**
                 * Encodes the specified AnonGroupMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.AnonGroupMsg.verify|verify} messages.
                 * @param message AnonGroupMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IAnonGroupMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AnonGroupMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.AnonGroupMsg.verify|verify} messages.
                 * @param message AnonGroupMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IAnonGroupMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AnonGroupMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AnonGroupMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.AnonGroupMsg;

                /**
                 * Decodes an AnonGroupMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AnonGroupMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.AnonGroupMsg;

                /**
                 * Verifies an AnonGroupMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AnonGroupMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AnonGroupMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.AnonGroupMsg;

                /**
                 * Creates a plain object from an AnonGroupMsg message. Also converts values to other types if specified.
                 * @param message AnonGroupMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.AnonGroupMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AnonGroupMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QqLiveOld. */
            interface IQqLiveOld {

                /** QqLiveOld Subcmd */
                Subcmd?: (number|null);

                /** QqLiveOld Showtext */
                Showtext?: (Uint8Array|null);

                /** QqLiveOld Param */
                Param?: (Uint8Array|null);

                /** QqLiveOld Introduce */
                Introduce?: (Uint8Array|null);
            }

            /** Represents a QqLiveOld. */
            class QqLiveOld implements IQqLiveOld {

                /**
                 * Constructs a new QqLiveOld.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IQqLiveOld);

                /** QqLiveOld Subcmd. */
                public Subcmd: number;

                /** QqLiveOld Showtext. */
                public Showtext: Uint8Array;

                /** QqLiveOld Param. */
                public Param: Uint8Array;

                /** QqLiveOld Introduce. */
                public Introduce: Uint8Array;

                /**
                 * Creates a new QqLiveOld instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QqLiveOld instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IQqLiveOld): Msg.MsgField.ImMsgBody.QqLiveOld;

                /**
                 * Encodes the specified QqLiveOld message. Does not implicitly {@link Msg.MsgField.ImMsgBody.QqLiveOld.verify|verify} messages.
                 * @param message QqLiveOld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IQqLiveOld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QqLiveOld message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.QqLiveOld.verify|verify} messages.
                 * @param message QqLiveOld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IQqLiveOld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QqLiveOld message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QqLiveOld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.QqLiveOld;

                /**
                 * Decodes a QqLiveOld message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QqLiveOld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.QqLiveOld;

                /**
                 * Verifies a QqLiveOld message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QqLiveOld message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QqLiveOld
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.QqLiveOld;

                /**
                 * Creates a plain object from a QqLiveOld message. Also converts values to other types if specified.
                 * @param message QqLiveOld
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.QqLiveOld, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QqLiveOld to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LifeOnline. */
            interface ILifeOnline {

                /** LifeOnline Uniqueid */
                Uniqueid?: (number|Long|null);

                /** LifeOnline Op */
                Op?: (number|null);

                /** LifeOnline Showtime */
                Showtime?: (number|null);

                /** LifeOnline Report */
                Report?: (number|null);

                /** LifeOnline Ack */
                Ack?: (number|null);

                /** LifeOnline Bitmap */
                Bitmap?: (number|Long|null);

                /** LifeOnline Gdtimpdata */
                Gdtimpdata?: (Uint8Array|null);

                /** LifeOnline Gdtclidata */
                Gdtclidata?: (Uint8Array|null);

                /** LifeOnline Viewid */
                Viewid?: (Uint8Array|null);
            }

            /** Represents a LifeOnline. */
            class LifeOnline implements ILifeOnline {

                /**
                 * Constructs a new LifeOnline.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ILifeOnline);

                /** LifeOnline Uniqueid. */
                public Uniqueid: (number|Long);

                /** LifeOnline Op. */
                public Op: number;

                /** LifeOnline Showtime. */
                public Showtime: number;

                /** LifeOnline Report. */
                public Report: number;

                /** LifeOnline Ack. */
                public Ack: number;

                /** LifeOnline Bitmap. */
                public Bitmap: (number|Long);

                /** LifeOnline Gdtimpdata. */
                public Gdtimpdata: Uint8Array;

                /** LifeOnline Gdtclidata. */
                public Gdtclidata: Uint8Array;

                /** LifeOnline Viewid. */
                public Viewid: Uint8Array;

                /**
                 * Creates a new LifeOnline instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LifeOnline instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ILifeOnline): Msg.MsgField.ImMsgBody.LifeOnline;

                /**
                 * Encodes the specified LifeOnline message. Does not implicitly {@link Msg.MsgField.ImMsgBody.LifeOnline.verify|verify} messages.
                 * @param message LifeOnline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ILifeOnline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LifeOnline message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.LifeOnline.verify|verify} messages.
                 * @param message LifeOnline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ILifeOnline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LifeOnline message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LifeOnline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.LifeOnline;

                /**
                 * Decodes a LifeOnline message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LifeOnline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.LifeOnline;

                /**
                 * Verifies a LifeOnline message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LifeOnline message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LifeOnline
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.LifeOnline;

                /**
                 * Creates a plain object from a LifeOnline message. Also converts values to other types if specified.
                 * @param message LifeOnline
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.LifeOnline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LifeOnline to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QQWalletAioElem. */
            interface IQQWalletAioElem {

                /** QQWalletAioElem Background */
                Background?: (number|null);

                /** QQWalletAioElem Icon */
                Icon?: (number|null);

                /** QQWalletAioElem Title */
                Title?: (Uint8Array|null);

                /** QQWalletAioElem Subtitle */
                Subtitle?: (Uint8Array|null);

                /** QQWalletAioElem Content */
                Content?: (Uint8Array|null);

                /** QQWalletAioElem Linkurl */
                Linkurl?: (Uint8Array|null);

                /** QQWalletAioElem Blackstripe */
                Blackstripe?: (Uint8Array|null);

                /** QQWalletAioElem Notice */
                Notice?: (Uint8Array|null);

                /** QQWalletAioElem Titlecolor */
                Titlecolor?: (number|null);

                /** QQWalletAioElem Subtitlecolor */
                Subtitlecolor?: (number|null);

                /** QQWalletAioElem Actionspriority */
                Actionspriority?: (Uint8Array|null);

                /** QQWalletAioElem Jumpurl */
                Jumpurl?: (Uint8Array|null);

                /** QQWalletAioElem Nativeios */
                Nativeios?: (Uint8Array|null);

                /** QQWalletAioElem Nativeandroid */
                Nativeandroid?: (Uint8Array|null);

                /** QQWalletAioElem Iconurl */
                Iconurl?: (Uint8Array|null);

                /** QQWalletAioElem Contentcolor */
                Contentcolor?: (number|null);

                /** QQWalletAioElem Contentbgcolor */
                Contentbgcolor?: (number|null);

                /** QQWalletAioElem Aioimageleft */
                Aioimageleft?: (Uint8Array|null);

                /** QQWalletAioElem Aioimageright */
                Aioimageright?: (Uint8Array|null);

                /** QQWalletAioElem Cftimage */
                Cftimage?: (Uint8Array|null);

                /** QQWalletAioElem Pbreserve */
                Pbreserve?: (Uint8Array|null);
            }

            /** Represents a QQWalletAioElem. */
            class QQWalletAioElem implements IQQWalletAioElem {

                /**
                 * Constructs a new QQWalletAioElem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IQQWalletAioElem);

                /** QQWalletAioElem Background. */
                public Background: number;

                /** QQWalletAioElem Icon. */
                public Icon: number;

                /** QQWalletAioElem Title. */
                public Title: Uint8Array;

                /** QQWalletAioElem Subtitle. */
                public Subtitle: Uint8Array;

                /** QQWalletAioElem Content. */
                public Content: Uint8Array;

                /** QQWalletAioElem Linkurl. */
                public Linkurl: Uint8Array;

                /** QQWalletAioElem Blackstripe. */
                public Blackstripe: Uint8Array;

                /** QQWalletAioElem Notice. */
                public Notice: Uint8Array;

                /** QQWalletAioElem Titlecolor. */
                public Titlecolor: number;

                /** QQWalletAioElem Subtitlecolor. */
                public Subtitlecolor: number;

                /** QQWalletAioElem Actionspriority. */
                public Actionspriority: Uint8Array;

                /** QQWalletAioElem Jumpurl. */
                public Jumpurl: Uint8Array;

                /** QQWalletAioElem Nativeios. */
                public Nativeios: Uint8Array;

                /** QQWalletAioElem Nativeandroid. */
                public Nativeandroid: Uint8Array;

                /** QQWalletAioElem Iconurl. */
                public Iconurl: Uint8Array;

                /** QQWalletAioElem Contentcolor. */
                public Contentcolor: number;

                /** QQWalletAioElem Contentbgcolor. */
                public Contentbgcolor: number;

                /** QQWalletAioElem Aioimageleft. */
                public Aioimageleft: Uint8Array;

                /** QQWalletAioElem Aioimageright. */
                public Aioimageright: Uint8Array;

                /** QQWalletAioElem Cftimage. */
                public Cftimage: Uint8Array;

                /** QQWalletAioElem Pbreserve. */
                public Pbreserve: Uint8Array;

                /**
                 * Creates a new QQWalletAioElem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QQWalletAioElem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IQQWalletAioElem): Msg.MsgField.ImMsgBody.QQWalletAioElem;

                /**
                 * Encodes the specified QQWalletAioElem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.QQWalletAioElem.verify|verify} messages.
                 * @param message QQWalletAioElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IQQWalletAioElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QQWalletAioElem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.QQWalletAioElem.verify|verify} messages.
                 * @param message QQWalletAioElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IQQWalletAioElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QQWalletAioElem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QQWalletAioElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.QQWalletAioElem;

                /**
                 * Decodes a QQWalletAioElem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QQWalletAioElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.QQWalletAioElem;

                /**
                 * Verifies a QQWalletAioElem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QQWalletAioElem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QQWalletAioElem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.QQWalletAioElem;

                /**
                 * Creates a plain object from a QQWalletAioElem message. Also converts values to other types if specified.
                 * @param message QQWalletAioElem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.QQWalletAioElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QQWalletAioElem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QQWalletAioBody. */
            interface IQQWalletAioBody {

                /** QQWalletAioBody Senduin */
                Senduin?: (number|Long|null);

                /** QQWalletAioBody Sender */
                Sender?: (Msg.MsgField.ImMsgBody.IQQWalletAioElem|null);

                /** QQWalletAioBody Receiver */
                Receiver?: (Msg.MsgField.ImMsgBody.IQQWalletAioElem|null);

                /** QQWalletAioBody Sint32channelid */
                Sint32channelid?: (number|null);

                /** QQWalletAioBody Sint32templateid */
                Sint32templateid?: (number|null);

                /** QQWalletAioBody Resend */
                Resend?: (number|null);

                /** QQWalletAioBody Msgpriority */
                Msgpriority?: (number|null);

                /** QQWalletAioBody Sint32redtype */
                Sint32redtype?: (number|null);

                /** QQWalletAioBody Billno */
                Billno?: (Uint8Array|null);

                /** QQWalletAioBody Authkey */
                Authkey?: (Uint8Array|null);

                /** QQWalletAioBody Sint32sessiontype */
                Sint32sessiontype?: (number|null);

                /** QQWalletAioBody Sint32msgtype */
                Sint32msgtype?: (number|null);

                /** QQWalletAioBody Sint32envelopeid */
                Sint32envelopeid?: (number|null);

                /** QQWalletAioBody Name */
                Name?: (Uint8Array|null);

                /** QQWalletAioBody Sint32conftype */
                Sint32conftype?: (number|null);

                /** QQWalletAioBody Sint32msgfrom */
                Sint32msgfrom?: (number|null);

                /** QQWalletAioBody Pcbody */
                Pcbody?: (Uint8Array|null);

                /** QQWalletAioBody Ingindex */
                Ingindex?: (Uint8Array|null);

                /** QQWalletAioBody Redchannel */
                Redchannel?: (number|null);

                /** QQWalletAioBody Grapuin */
                Grapuin?: ((number|Long)[]|null);

                /** QQWalletAioBody Pbreserve */
                Pbreserve?: (Uint8Array|null);
            }

            /** Represents a QQWalletAioBody. */
            class QQWalletAioBody implements IQQWalletAioBody {

                /**
                 * Constructs a new QQWalletAioBody.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IQQWalletAioBody);

                /** QQWalletAioBody Senduin. */
                public Senduin: (number|Long);

                /** QQWalletAioBody Sender. */
                public Sender?: (Msg.MsgField.ImMsgBody.IQQWalletAioElem|null);

                /** QQWalletAioBody Receiver. */
                public Receiver?: (Msg.MsgField.ImMsgBody.IQQWalletAioElem|null);

                /** QQWalletAioBody Sint32channelid. */
                public Sint32channelid: number;

                /** QQWalletAioBody Sint32templateid. */
                public Sint32templateid: number;

                /** QQWalletAioBody Resend. */
                public Resend: number;

                /** QQWalletAioBody Msgpriority. */
                public Msgpriority: number;

                /** QQWalletAioBody Sint32redtype. */
                public Sint32redtype: number;

                /** QQWalletAioBody Billno. */
                public Billno: Uint8Array;

                /** QQWalletAioBody Authkey. */
                public Authkey: Uint8Array;

                /** QQWalletAioBody Sint32sessiontype. */
                public Sint32sessiontype: number;

                /** QQWalletAioBody Sint32msgtype. */
                public Sint32msgtype: number;

                /** QQWalletAioBody Sint32envelopeid. */
                public Sint32envelopeid: number;

                /** QQWalletAioBody Name. */
                public Name: Uint8Array;

                /** QQWalletAioBody Sint32conftype. */
                public Sint32conftype: number;

                /** QQWalletAioBody Sint32msgfrom. */
                public Sint32msgfrom: number;

                /** QQWalletAioBody Pcbody. */
                public Pcbody: Uint8Array;

                /** QQWalletAioBody Ingindex. */
                public Ingindex: Uint8Array;

                /** QQWalletAioBody Redchannel. */
                public Redchannel: number;

                /** QQWalletAioBody Grapuin. */
                public Grapuin: (number|Long)[];

                /** QQWalletAioBody Pbreserve. */
                public Pbreserve: Uint8Array;

                /**
                 * Creates a new QQWalletAioBody instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QQWalletAioBody instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IQQWalletAioBody): Msg.MsgField.ImMsgBody.QQWalletAioBody;

                /**
                 * Encodes the specified QQWalletAioBody message. Does not implicitly {@link Msg.MsgField.ImMsgBody.QQWalletAioBody.verify|verify} messages.
                 * @param message QQWalletAioBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IQQWalletAioBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QQWalletAioBody message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.QQWalletAioBody.verify|verify} messages.
                 * @param message QQWalletAioBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IQQWalletAioBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QQWalletAioBody message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QQWalletAioBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.QQWalletAioBody;

                /**
                 * Decodes a QQWalletAioBody message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QQWalletAioBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.QQWalletAioBody;

                /**
                 * Verifies a QQWalletAioBody message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QQWalletAioBody message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QQWalletAioBody
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.QQWalletAioBody;

                /**
                 * Creates a plain object from a QQWalletAioBody message. Also converts values to other types if specified.
                 * @param message QQWalletAioBody
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.QQWalletAioBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QQWalletAioBody to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QQWalletMsg. */
            interface IQQWalletMsg {

                /** QQWalletMsg AioBody */
                AioBody?: (Msg.MsgField.ImMsgBody.IQQWalletAioBody|null);
            }

            /** Represents a QQWalletMsg. */
            class QQWalletMsg implements IQQWalletMsg {

                /**
                 * Constructs a new QQWalletMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IQQWalletMsg);

                /** QQWalletMsg AioBody. */
                public AioBody?: (Msg.MsgField.ImMsgBody.IQQWalletAioBody|null);

                /**
                 * Creates a new QQWalletMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QQWalletMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IQQWalletMsg): Msg.MsgField.ImMsgBody.QQWalletMsg;

                /**
                 * Encodes the specified QQWalletMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.QQWalletMsg.verify|verify} messages.
                 * @param message QQWalletMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IQQWalletMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QQWalletMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.QQWalletMsg.verify|verify} messages.
                 * @param message QQWalletMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IQQWalletMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QQWalletMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QQWalletMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.QQWalletMsg;

                /**
                 * Decodes a QQWalletMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QQWalletMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.QQWalletMsg;

                /**
                 * Verifies a QQWalletMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QQWalletMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QQWalletMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.QQWalletMsg;

                /**
                 * Creates a plain object from a QQWalletMsg message. Also converts values to other types if specified.
                 * @param message QQWalletMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.QQWalletMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QQWalletMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrmElem. */
            interface ICrmElem {

                /** CrmElem Crmbuf */
                Crmbuf?: (Uint8Array|null);

                /** CrmElem Msgresid */
                Msgresid?: (Uint8Array|null);

                /** CrmElem Qidianflag */
                Qidianflag?: (number|null);

                /** CrmElem Pushflag */
                Pushflag?: (number|null);

                /** CrmElem Countflag */
                Countflag?: (number|null);
            }

            /** Represents a CrmElem. */
            class CrmElem implements ICrmElem {

                /**
                 * Constructs a new CrmElem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ICrmElem);

                /** CrmElem Crmbuf. */
                public Crmbuf: Uint8Array;

                /** CrmElem Msgresid. */
                public Msgresid: Uint8Array;

                /** CrmElem Qidianflag. */
                public Qidianflag: number;

                /** CrmElem Pushflag. */
                public Pushflag: number;

                /** CrmElem Countflag. */
                public Countflag: number;

                /**
                 * Creates a new CrmElem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrmElem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ICrmElem): Msg.MsgField.ImMsgBody.CrmElem;

                /**
                 * Encodes the specified CrmElem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.CrmElem.verify|verify} messages.
                 * @param message CrmElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ICrmElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrmElem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.CrmElem.verify|verify} messages.
                 * @param message CrmElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ICrmElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrmElem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrmElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.CrmElem;

                /**
                 * Decodes a CrmElem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrmElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.CrmElem;

                /**
                 * Verifies a CrmElem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrmElem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrmElem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.CrmElem;

                /**
                 * Creates a plain object from a CrmElem message. Also converts values to other types if specified.
                 * @param message CrmElem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.CrmElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrmElem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ConferenceTipsInfo. */
            interface IConferenceTipsInfo {

                /** ConferenceTipsInfo Sessiontype */
                Sessiontype?: (number|null);

                /** ConferenceTipsInfo Sessionuin */
                Sessionuin?: (number|Long|null);

                /** ConferenceTipsInfo Text */
                Text?: (string|null);
            }

            /** Represents a ConferenceTipsInfo. */
            class ConferenceTipsInfo implements IConferenceTipsInfo {

                /**
                 * Constructs a new ConferenceTipsInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IConferenceTipsInfo);

                /** ConferenceTipsInfo Sessiontype. */
                public Sessiontype: number;

                /** ConferenceTipsInfo Sessionuin. */
                public Sessionuin: (number|Long);

                /** ConferenceTipsInfo Text. */
                public Text: string;

                /**
                 * Creates a new ConferenceTipsInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConferenceTipsInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IConferenceTipsInfo): Msg.MsgField.ImMsgBody.ConferenceTipsInfo;

                /**
                 * Encodes the specified ConferenceTipsInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.ConferenceTipsInfo.verify|verify} messages.
                 * @param message ConferenceTipsInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IConferenceTipsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConferenceTipsInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.ConferenceTipsInfo.verify|verify} messages.
                 * @param message ConferenceTipsInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IConferenceTipsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConferenceTipsInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConferenceTipsInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.ConferenceTipsInfo;

                /**
                 * Decodes a ConferenceTipsInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConferenceTipsInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.ConferenceTipsInfo;

                /**
                 * Verifies a ConferenceTipsInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConferenceTipsInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConferenceTipsInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.ConferenceTipsInfo;

                /**
                 * Creates a plain object from a ConferenceTipsInfo message. Also converts values to other types if specified.
                 * @param message ConferenceTipsInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.ConferenceTipsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConferenceTipsInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RedbagInfo. */
            interface IRedbagInfo {

                /** RedbagInfo Type */
                Type?: (number|null);
            }

            /** Represents a RedbagInfo. */
            class RedbagInfo implements IRedbagInfo {

                /**
                 * Constructs a new RedbagInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IRedbagInfo);

                /** RedbagInfo Type. */
                public Type: number;

                /**
                 * Creates a new RedbagInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RedbagInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IRedbagInfo): Msg.MsgField.ImMsgBody.RedbagInfo;

                /**
                 * Encodes the specified RedbagInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.RedbagInfo.verify|verify} messages.
                 * @param message RedbagInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IRedbagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RedbagInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.RedbagInfo.verify|verify} messages.
                 * @param message RedbagInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IRedbagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RedbagInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RedbagInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.RedbagInfo;

                /**
                 * Decodes a RedbagInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RedbagInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.RedbagInfo;

                /**
                 * Verifies a RedbagInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RedbagInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RedbagInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.RedbagInfo;

                /**
                 * Creates a plain object from a RedbagInfo message. Also converts values to other types if specified.
                 * @param message RedbagInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.RedbagInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RedbagInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LowVersionTips. */
            interface ILowVersionTips {

                /** LowVersionTips Businessid */
                Businessid?: (number|null);

                /** LowVersionTips Sessiontype */
                Sessiontype?: (number|null);

                /** LowVersionTips Sessionuin */
                Sessionuin?: (number|Long|null);

                /** LowVersionTips Senderuin */
                Senderuin?: (number|Long|null);

                /** LowVersionTips Text */
                Text?: (string|null);
            }

            /** Represents a LowVersionTips. */
            class LowVersionTips implements ILowVersionTips {

                /**
                 * Constructs a new LowVersionTips.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ILowVersionTips);

                /** LowVersionTips Businessid. */
                public Businessid: number;

                /** LowVersionTips Sessiontype. */
                public Sessiontype: number;

                /** LowVersionTips Sessionuin. */
                public Sessionuin: (number|Long);

                /** LowVersionTips Senderuin. */
                public Senderuin: (number|Long);

                /** LowVersionTips Text. */
                public Text: string;

                /**
                 * Creates a new LowVersionTips instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LowVersionTips instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ILowVersionTips): Msg.MsgField.ImMsgBody.LowVersionTips;

                /**
                 * Encodes the specified LowVersionTips message. Does not implicitly {@link Msg.MsgField.ImMsgBody.LowVersionTips.verify|verify} messages.
                 * @param message LowVersionTips message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ILowVersionTips, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LowVersionTips message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.LowVersionTips.verify|verify} messages.
                 * @param message LowVersionTips message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ILowVersionTips, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LowVersionTips message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LowVersionTips
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.LowVersionTips;

                /**
                 * Decodes a LowVersionTips message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LowVersionTips
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.LowVersionTips;

                /**
                 * Verifies a LowVersionTips message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LowVersionTips message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LowVersionTips
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.LowVersionTips;

                /**
                 * Creates a plain object from a LowVersionTips message. Also converts values to other types if specified.
                 * @param message LowVersionTips
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.LowVersionTips, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LowVersionTips to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NearByMsg. */
            interface INearByMsg {

                /** NearByMsg Type */
                Type?: (number|null);

                /** NearByMsg IdentifyType */
                IdentifyType?: (number|null);
            }

            /** Represents a NearByMsg. */
            class NearByMsg implements INearByMsg {

                /**
                 * Constructs a new NearByMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.INearByMsg);

                /** NearByMsg Type. */
                public Type: number;

                /** NearByMsg IdentifyType. */
                public IdentifyType: number;

                /**
                 * Creates a new NearByMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NearByMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.INearByMsg): Msg.MsgField.ImMsgBody.NearByMsg;

                /**
                 * Encodes the specified NearByMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.NearByMsg.verify|verify} messages.
                 * @param message NearByMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.INearByMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NearByMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.NearByMsg.verify|verify} messages.
                 * @param message NearByMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.INearByMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NearByMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NearByMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.NearByMsg;

                /**
                 * Decodes a NearByMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NearByMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.NearByMsg;

                /**
                 * Verifies a NearByMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NearByMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NearByMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.NearByMsg;

                /**
                 * Creates a plain object from a NearByMsg message. Also converts values to other types if specified.
                 * @param message NearByMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.NearByMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NearByMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CustomElem. */
            interface ICustomElem {

                /** CustomElem Desc */
                Desc?: (Uint8Array|null);

                /** CustomElem Data */
                Data?: (Uint8Array|null);

                /** CustomElem Enumtype */
                Enumtype?: (number|null);

                /** CustomElem Ext */
                Ext?: (Uint8Array|null);

                /** CustomElem Sound */
                Sound?: (Uint8Array|null);
            }

            /** Represents a CustomElem. */
            class CustomElem implements ICustomElem {

                /**
                 * Constructs a new CustomElem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ICustomElem);

                /** CustomElem Desc. */
                public Desc: Uint8Array;

                /** CustomElem Data. */
                public Data: Uint8Array;

                /** CustomElem Enumtype. */
                public Enumtype: number;

                /** CustomElem Ext. */
                public Ext: Uint8Array;

                /** CustomElem Sound. */
                public Sound: Uint8Array;

                /**
                 * Creates a new CustomElem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomElem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ICustomElem): Msg.MsgField.ImMsgBody.CustomElem;

                /**
                 * Encodes the specified CustomElem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.CustomElem.verify|verify} messages.
                 * @param message CustomElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ICustomElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustomElem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.CustomElem.verify|verify} messages.
                 * @param message CustomElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ICustomElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomElem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustomElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.CustomElem;

                /**
                 * Decodes a CustomElem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustomElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.CustomElem;

                /**
                 * Verifies a CustomElem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustomElem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustomElem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.CustomElem;

                /**
                 * Creates a plain object from a CustomElem message. Also converts values to other types if specified.
                 * @param message CustomElem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.CustomElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustomElem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LocationInfo. */
            interface ILocationInfo {

                /** LocationInfo Longitude */
                Longitude?: (number|null);

                /** LocationInfo Latitude */
                Latitude?: (number|null);

                /** LocationInfo Desc */
                Desc?: (Uint8Array|null);
            }

            /** Represents a LocationInfo. */
            class LocationInfo implements ILocationInfo {

                /**
                 * Constructs a new LocationInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ILocationInfo);

                /** LocationInfo Longitude. */
                public Longitude: number;

                /** LocationInfo Latitude. */
                public Latitude: number;

                /** LocationInfo Desc. */
                public Desc: Uint8Array;

                /**
                 * Creates a new LocationInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LocationInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ILocationInfo): Msg.MsgField.ImMsgBody.LocationInfo;

                /**
                 * Encodes the specified LocationInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.LocationInfo.verify|verify} messages.
                 * @param message LocationInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ILocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LocationInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.LocationInfo.verify|verify} messages.
                 * @param message LocationInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ILocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LocationInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LocationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.LocationInfo;

                /**
                 * Decodes a LocationInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LocationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.LocationInfo;

                /**
                 * Verifies a LocationInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LocationInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LocationInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.LocationInfo;

                /**
                 * Creates a plain object from a LocationInfo message. Also converts values to other types if specified.
                 * @param message LocationInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.LocationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LocationInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PubAccInfo. */
            interface IPubAccInfo {

                /** PubAccInfo Isinternum */
                Isinternum?: (number|null);

                /** PubAccInfo Ingmsgtemplateid */
                Ingmsgtemplateid?: (string|null);

                /** PubAccInfo Inglongmsgurl */
                Inglongmsgurl?: (string|null);

                /** PubAccInfo Downloadkey */
                Downloadkey?: (Uint8Array|null);
            }

            /** Represents a PubAccInfo. */
            class PubAccInfo implements IPubAccInfo {

                /**
                 * Constructs a new PubAccInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IPubAccInfo);

                /** PubAccInfo Isinternum. */
                public Isinternum: number;

                /** PubAccInfo Ingmsgtemplateid. */
                public Ingmsgtemplateid: string;

                /** PubAccInfo Inglongmsgurl. */
                public Inglongmsgurl: string;

                /** PubAccInfo Downloadkey. */
                public Downloadkey: Uint8Array;

                /**
                 * Creates a new PubAccInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubAccInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IPubAccInfo): Msg.MsgField.ImMsgBody.PubAccInfo;

                /**
                 * Encodes the specified PubAccInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.PubAccInfo.verify|verify} messages.
                 * @param message PubAccInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IPubAccInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PubAccInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.PubAccInfo.verify|verify} messages.
                 * @param message PubAccInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IPubAccInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubAccInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PubAccInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.PubAccInfo;

                /**
                 * Decodes a PubAccInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PubAccInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.PubAccInfo;

                /**
                 * Verifies a PubAccInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PubAccInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PubAccInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.PubAccInfo;

                /**
                 * Creates a plain object from a PubAccInfo message. Also converts values to other types if specified.
                 * @param message PubAccInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.PubAccInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PubAccInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SmallEmoji. */
            interface ISmallEmoji {

                /** SmallEmoji Packidsum */
                Packidsum?: (number|null);

                /** SmallEmoji Imagetype */
                Imagetype?: (number|null);
            }

            /** Represents a SmallEmoji. */
            class SmallEmoji implements ISmallEmoji {

                /**
                 * Constructs a new SmallEmoji.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ISmallEmoji);

                /** SmallEmoji Packidsum. */
                public Packidsum: number;

                /** SmallEmoji Imagetype. */
                public Imagetype: number;

                /**
                 * Creates a new SmallEmoji instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SmallEmoji instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ISmallEmoji): Msg.MsgField.ImMsgBody.SmallEmoji;

                /**
                 * Encodes the specified SmallEmoji message. Does not implicitly {@link Msg.MsgField.ImMsgBody.SmallEmoji.verify|verify} messages.
                 * @param message SmallEmoji message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ISmallEmoji, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SmallEmoji message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.SmallEmoji.verify|verify} messages.
                 * @param message SmallEmoji message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ISmallEmoji, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SmallEmoji message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SmallEmoji
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.SmallEmoji;

                /**
                 * Decodes a SmallEmoji message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SmallEmoji
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.SmallEmoji;

                /**
                 * Verifies a SmallEmoji message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SmallEmoji message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SmallEmoji
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.SmallEmoji;

                /**
                 * Creates a plain object from a SmallEmoji message. Also converts values to other types if specified.
                 * @param message SmallEmoji
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.SmallEmoji, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SmallEmoji to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FsjMsgElem. */
            interface IFsjMsgElem {

                /** FsjMsgElem MsgType */
                MsgType?: (number|null);
            }

            /** Represents a FsjMsgElem. */
            class FsjMsgElem implements IFsjMsgElem {

                /**
                 * Constructs a new FsjMsgElem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IFsjMsgElem);

                /** FsjMsgElem MsgType. */
                public MsgType: number;

                /**
                 * Creates a new FsjMsgElem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FsjMsgElem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IFsjMsgElem): Msg.MsgField.ImMsgBody.FsjMsgElem;

                /**
                 * Encodes the specified FsjMsgElem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.FsjMsgElem.verify|verify} messages.
                 * @param message FsjMsgElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IFsjMsgElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FsjMsgElem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.FsjMsgElem.verify|verify} messages.
                 * @param message FsjMsgElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IFsjMsgElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FsjMsgElem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FsjMsgElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.FsjMsgElem;

                /**
                 * Decodes a FsjMsgElem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FsjMsgElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.FsjMsgElem;

                /**
                 * Verifies a FsjMsgElem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FsjMsgElem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FsjMsgElem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.FsjMsgElem;

                /**
                 * Creates a plain object from a FsjMsgElem message. Also converts values to other types if specified.
                 * @param message FsjMsgElem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.FsjMsgElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FsjMsgElem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ArkApp. */
            interface IArkApp {

                /** ArkApp Appname */
                Appname?: (string|null);

                /** ArkApp Minversion */
                Minversion?: (string|null);

                /** ArkApp Xmltemplate */
                Xmltemplate?: (string|null);

                /** ArkApp Data */
                Data?: (Uint8Array|null);
            }

            /** Represents an ArkApp. */
            class ArkApp implements IArkApp {

                /**
                 * Constructs a new ArkApp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IArkApp);

                /** ArkApp Appname. */
                public Appname: string;

                /** ArkApp Minversion. */
                public Minversion: string;

                /** ArkApp Xmltemplate. */
                public Xmltemplate: string;

                /** ArkApp Data. */
                public Data: Uint8Array;

                /**
                 * Creates a new ArkApp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ArkApp instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IArkApp): Msg.MsgField.ImMsgBody.ArkApp;

                /**
                 * Encodes the specified ArkApp message. Does not implicitly {@link Msg.MsgField.ImMsgBody.ArkApp.verify|verify} messages.
                 * @param message ArkApp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IArkApp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ArkApp message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.ArkApp.verify|verify} messages.
                 * @param message ArkApp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IArkApp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ArkApp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ArkApp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.ArkApp;

                /**
                 * Decodes an ArkApp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ArkApp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.ArkApp;

                /**
                 * Verifies an ArkApp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ArkApp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ArkApp
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.ArkApp;

                /**
                 * Creates a plain object from an ArkApp message. Also converts values to other types if specified.
                 * @param message ArkApp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.ArkApp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ArkApp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GeneralFlags. */
            interface IGeneralFlags {

                /** GeneralFlags Bubblediytextid */
                Bubblediytextid?: (number|null);

                /** GeneralFlags Groupflagnew */
                Groupflagnew?: (number|null);

                /** GeneralFlags Uin */
                Uin?: (number|Long|null);

                /** GeneralFlags Rpid */
                Rpid?: (Uint8Array|null);

                /** GeneralFlags Prpfold */
                Prpfold?: (number|null);

                /** GeneralFlags Longtextflag */
                Longtextflag?: (number|null);

                /** GeneralFlags Longtextresid */
                Longtextresid?: (string|null);

                /** GeneralFlags Grouptype */
                Grouptype?: (number|null);

                /** GeneralFlags Touinflag */
                Touinflag?: (number|null);

                /** GeneralFlags Glamourlevel */
                Glamourlevel?: (number|null);

                /** GeneralFlags Memberlevel */
                Memberlevel?: (number|null);

                /** GeneralFlags Grouprankseq */
                Grouprankseq?: (number|Long|null);

                /** GeneralFlags Olympictorch */
                Olympictorch?: (number|null);

                /** GeneralFlags Babyqguidemsgcookie */
                Babyqguidemsgcookie?: (Uint8Array|null);

                /** GeneralFlags Uin32expertflag */
                Uin32expertflag?: (number|null);

                /** GeneralFlags Bubblesubid */
                Bubblesubid?: (number|null);

                /** GeneralFlags Pendantid */
                Pendantid?: (number|Long|null);

                /** GeneralFlags Rpindex */
                Rpindex?: (Uint8Array|null);

                /** GeneralFlags Pbreserve */
                Pbreserve?: (Uint8Array|null);
            }

            /** Represents a GeneralFlags. */
            class GeneralFlags implements IGeneralFlags {

                /**
                 * Constructs a new GeneralFlags.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IGeneralFlags);

                /** GeneralFlags Bubblediytextid. */
                public Bubblediytextid: number;

                /** GeneralFlags Groupflagnew. */
                public Groupflagnew: number;

                /** GeneralFlags Uin. */
                public Uin: (number|Long);

                /** GeneralFlags Rpid. */
                public Rpid: Uint8Array;

                /** GeneralFlags Prpfold. */
                public Prpfold: number;

                /** GeneralFlags Longtextflag. */
                public Longtextflag: number;

                /** GeneralFlags Longtextresid. */
                public Longtextresid: string;

                /** GeneralFlags Grouptype. */
                public Grouptype: number;

                /** GeneralFlags Touinflag. */
                public Touinflag: number;

                /** GeneralFlags Glamourlevel. */
                public Glamourlevel: number;

                /** GeneralFlags Memberlevel. */
                public Memberlevel: number;

                /** GeneralFlags Grouprankseq. */
                public Grouprankseq: (number|Long);

                /** GeneralFlags Olympictorch. */
                public Olympictorch: number;

                /** GeneralFlags Babyqguidemsgcookie. */
                public Babyqguidemsgcookie: Uint8Array;

                /** GeneralFlags Uin32expertflag. */
                public Uin32expertflag: number;

                /** GeneralFlags Bubblesubid. */
                public Bubblesubid: number;

                /** GeneralFlags Pendantid. */
                public Pendantid: (number|Long);

                /** GeneralFlags Rpindex. */
                public Rpindex: Uint8Array;

                /** GeneralFlags Pbreserve. */
                public Pbreserve: Uint8Array;

                /**
                 * Creates a new GeneralFlags instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GeneralFlags instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IGeneralFlags): Msg.MsgField.ImMsgBody.GeneralFlags;

                /**
                 * Encodes the specified GeneralFlags message. Does not implicitly {@link Msg.MsgField.ImMsgBody.GeneralFlags.verify|verify} messages.
                 * @param message GeneralFlags message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IGeneralFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GeneralFlags message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.GeneralFlags.verify|verify} messages.
                 * @param message GeneralFlags message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IGeneralFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GeneralFlags message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GeneralFlags
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.GeneralFlags;

                /**
                 * Decodes a GeneralFlags message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GeneralFlags
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.GeneralFlags;

                /**
                 * Verifies a GeneralFlags message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GeneralFlags message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GeneralFlags
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.GeneralFlags;

                /**
                 * Creates a plain object from a GeneralFlags message. Also converts values to other types if specified.
                 * @param message GeneralFlags
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.GeneralFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GeneralFlags to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HcFlashPic. */
            interface IHcFlashPic {

                /** HcFlashPic Guid */
                Guid?: (Uint8Array|null);

                /** HcFlashPic Filepath */
                Filepath?: (string|null);

                /** HcFlashPic Shortcut */
                Shortcut?: (string|null);

                /** HcFlashPic Buffer */
                Buffer?: (Uint8Array|null);

                /** HcFlashPic Flag */
                Flag?: (Uint8Array|null);

                /** HcFlashPic Olddata */
                Olddata?: (Uint8Array|null);

                /** HcFlashPic Fileid */
                Fileid?: (number|null);

                /** HcFlashPic Serverip */
                Serverip?: (number|null);

                /** HcFlashPic Serverport */
                Serverport?: (number|null);

                /** HcFlashPic Filetype */
                Filetype?: (number|null);

                /** HcFlashPic Signature */
                Signature?: (Uint8Array|null);

                /** HcFlashPic Useful */
                Useful?: (number|null);

                /** HcFlashPic Md5 */
                Md5?: (Uint8Array|null);

                /** HcFlashPic Thumburl */
                Thumburl?: (string|null);

                /** HcFlashPic Bigurl */
                Bigurl?: (string|null);

                /** HcFlashPic Origurl */
                Origurl?: (string|null);

                /** HcFlashPic Biztype */
                Biztype?: (number|null);

                /** HcFlashPic Repeatindex */
                Repeatindex?: (number|null);

                /** HcFlashPic Repeatimage */
                Repeatimage?: (number|null);

                /** HcFlashPic Imagetype */
                Imagetype?: (number|null);

                /** HcFlashPic Index */
                Index?: (number|null);

                /** HcFlashPic Width */
                Width?: (number|null);

                /** HcFlashPic Height */
                Height?: (number|null);

                /** HcFlashPic Source */
                Source?: (number|null);

                /** HcFlashPic Size */
                Size?: (number|null);

                /** HcFlashPic Origin */
                Origin?: (number|null);

                /** HcFlashPic Thumbwidth */
                Thumbwidth?: (number|null);

                /** HcFlashPic Thumbheight */
                Thumbheight?: (number|null);

                /** HcFlashPic Showlen */
                Showlen?: (number|null);

                /** HcFlashPic Downloadlen */
                Downloadlen?: (number|null);

                /** HcFlashPic Url */
                Url?: (string|null);

                /** HcFlashPic Otherwidth */
                Otherwidth?: (number|null);

                /** HcFlashPic Otherheight */
                Otherheight?: (number|null);

                /** HcFlashPic Pbreserve */
                Pbreserve?: (Uint8Array|null);
            }

            /** Represents a HcFlashPic. */
            class HcFlashPic implements IHcFlashPic {

                /**
                 * Constructs a new HcFlashPic.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IHcFlashPic);

                /** HcFlashPic Guid. */
                public Guid: Uint8Array;

                /** HcFlashPic Filepath. */
                public Filepath: string;

                /** HcFlashPic Shortcut. */
                public Shortcut: string;

                /** HcFlashPic Buffer. */
                public Buffer: Uint8Array;

                /** HcFlashPic Flag. */
                public Flag: Uint8Array;

                /** HcFlashPic Olddata. */
                public Olddata: Uint8Array;

                /** HcFlashPic Fileid. */
                public Fileid: number;

                /** HcFlashPic Serverip. */
                public Serverip: number;

                /** HcFlashPic Serverport. */
                public Serverport: number;

                /** HcFlashPic Filetype. */
                public Filetype: number;

                /** HcFlashPic Signature. */
                public Signature: Uint8Array;

                /** HcFlashPic Useful. */
                public Useful: number;

                /** HcFlashPic Md5. */
                public Md5: Uint8Array;

                /** HcFlashPic Thumburl. */
                public Thumburl: string;

                /** HcFlashPic Bigurl. */
                public Bigurl: string;

                /** HcFlashPic Origurl. */
                public Origurl: string;

                /** HcFlashPic Biztype. */
                public Biztype: number;

                /** HcFlashPic Repeatindex. */
                public Repeatindex: number;

                /** HcFlashPic Repeatimage. */
                public Repeatimage: number;

                /** HcFlashPic Imagetype. */
                public Imagetype: number;

                /** HcFlashPic Index. */
                public Index: number;

                /** HcFlashPic Width. */
                public Width: number;

                /** HcFlashPic Height. */
                public Height: number;

                /** HcFlashPic Source. */
                public Source: number;

                /** HcFlashPic Size. */
                public Size: number;

                /** HcFlashPic Origin. */
                public Origin: number;

                /** HcFlashPic Thumbwidth. */
                public Thumbwidth: number;

                /** HcFlashPic Thumbheight. */
                public Thumbheight: number;

                /** HcFlashPic Showlen. */
                public Showlen: number;

                /** HcFlashPic Downloadlen. */
                public Downloadlen: number;

                /** HcFlashPic Url. */
                public Url: string;

                /** HcFlashPic Otherwidth. */
                public Otherwidth: number;

                /** HcFlashPic Otherheight. */
                public Otherheight: number;

                /** HcFlashPic Pbreserve. */
                public Pbreserve: Uint8Array;

                /**
                 * Creates a new HcFlashPic instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HcFlashPic instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IHcFlashPic): Msg.MsgField.ImMsgBody.HcFlashPic;

                /**
                 * Encodes the specified HcFlashPic message. Does not implicitly {@link Msg.MsgField.ImMsgBody.HcFlashPic.verify|verify} messages.
                 * @param message HcFlashPic message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IHcFlashPic, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HcFlashPic message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.HcFlashPic.verify|verify} messages.
                 * @param message HcFlashPic message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IHcFlashPic, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HcFlashPic message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HcFlashPic
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.HcFlashPic;

                /**
                 * Decodes a HcFlashPic message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HcFlashPic
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.HcFlashPic;

                /**
                 * Verifies a HcFlashPic message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HcFlashPic message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HcFlashPic
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.HcFlashPic;

                /**
                 * Creates a plain object from a HcFlashPic message. Also converts values to other types if specified.
                 * @param message HcFlashPic
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.HcFlashPic, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HcFlashPic to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeliverGiftMsg. */
            interface IDeliverGiftMsg {

                /** DeliverGiftMsg Graytipcontent */
                Graytipcontent?: (Uint8Array|null);

                /** DeliverGiftMsg Animationpackageid */
                Animationpackageid?: (number|null);

                /** DeliverGiftMsg Animationpackageurla */
                Animationpackageurla?: (Uint8Array|null);

                /** DeliverGiftMsg Animationpackageurli */
                Animationpackageurli?: (Uint8Array|null);

                /** DeliverGiftMsg Remindbrief */
                Remindbrief?: (Uint8Array|null);

                /** DeliverGiftMsg Giftid */
                Giftid?: (number|null);

                /** DeliverGiftMsg Giftcount */
                Giftcount?: (number|null);

                /** DeliverGiftMsg Animationbrief */
                Animationbrief?: (Uint8Array|null);

                /** DeliverGiftMsg Senderuin */
                Senderuin?: (number|Long|null);

                /** DeliverGiftMsg Receiveruin */
                Receiveruin?: (number|Long|null);

                /** DeliverGiftMsg Stmessagetitle */
                Stmessagetitle?: (Uint8Array|null);

                /** DeliverGiftMsg Stmessagesubtitle */
                Stmessagesubtitle?: (Uint8Array|null);

                /** DeliverGiftMsg Stmessagemessage */
                Stmessagemessage?: (Uint8Array|null);

                /** DeliverGiftMsg Stmessagegiftpicid */
                Stmessagegiftpicid?: (number|null);

                /** DeliverGiftMsg Stmessagecomefrom */
                Stmessagecomefrom?: (Uint8Array|null);

                /** DeliverGiftMsg Stmessageexflag */
                Stmessageexflag?: (number|null);

                /** DeliverGiftMsg Toallgiftid */
                Toallgiftid?: (Uint8Array|null);

                /** DeliverGiftMsg Comefromlink */
                Comefromlink?: (Uint8Array|null);

                /** DeliverGiftMsg Pbreserve */
                Pbreserve?: (Uint8Array|null);

                /** DeliverGiftMsg Receivername */
                Receivername?: (Uint8Array|null);

                /** DeliverGiftMsg Receiverpic */
                Receiverpic?: (Uint8Array|null);

                /** DeliverGiftMsg Stmessagegifturl */
                Stmessagegifturl?: (Uint8Array|null);
            }

            /** Represents a DeliverGiftMsg. */
            class DeliverGiftMsg implements IDeliverGiftMsg {

                /**
                 * Constructs a new DeliverGiftMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IDeliverGiftMsg);

                /** DeliverGiftMsg Graytipcontent. */
                public Graytipcontent: Uint8Array;

                /** DeliverGiftMsg Animationpackageid. */
                public Animationpackageid: number;

                /** DeliverGiftMsg Animationpackageurla. */
                public Animationpackageurla: Uint8Array;

                /** DeliverGiftMsg Animationpackageurli. */
                public Animationpackageurli: Uint8Array;

                /** DeliverGiftMsg Remindbrief. */
                public Remindbrief: Uint8Array;

                /** DeliverGiftMsg Giftid. */
                public Giftid: number;

                /** DeliverGiftMsg Giftcount. */
                public Giftcount: number;

                /** DeliverGiftMsg Animationbrief. */
                public Animationbrief: Uint8Array;

                /** DeliverGiftMsg Senderuin. */
                public Senderuin: (number|Long);

                /** DeliverGiftMsg Receiveruin. */
                public Receiveruin: (number|Long);

                /** DeliverGiftMsg Stmessagetitle. */
                public Stmessagetitle: Uint8Array;

                /** DeliverGiftMsg Stmessagesubtitle. */
                public Stmessagesubtitle: Uint8Array;

                /** DeliverGiftMsg Stmessagemessage. */
                public Stmessagemessage: Uint8Array;

                /** DeliverGiftMsg Stmessagegiftpicid. */
                public Stmessagegiftpicid: number;

                /** DeliverGiftMsg Stmessagecomefrom. */
                public Stmessagecomefrom: Uint8Array;

                /** DeliverGiftMsg Stmessageexflag. */
                public Stmessageexflag: number;

                /** DeliverGiftMsg Toallgiftid. */
                public Toallgiftid: Uint8Array;

                /** DeliverGiftMsg Comefromlink. */
                public Comefromlink: Uint8Array;

                /** DeliverGiftMsg Pbreserve. */
                public Pbreserve: Uint8Array;

                /** DeliverGiftMsg Receivername. */
                public Receivername: Uint8Array;

                /** DeliverGiftMsg Receiverpic. */
                public Receiverpic: Uint8Array;

                /** DeliverGiftMsg Stmessagegifturl. */
                public Stmessagegifturl: Uint8Array;

                /**
                 * Creates a new DeliverGiftMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeliverGiftMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IDeliverGiftMsg): Msg.MsgField.ImMsgBody.DeliverGiftMsg;

                /**
                 * Encodes the specified DeliverGiftMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.DeliverGiftMsg.verify|verify} messages.
                 * @param message DeliverGiftMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IDeliverGiftMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeliverGiftMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.DeliverGiftMsg.verify|verify} messages.
                 * @param message DeliverGiftMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IDeliverGiftMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeliverGiftMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeliverGiftMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.DeliverGiftMsg;

                /**
                 * Decodes a DeliverGiftMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeliverGiftMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.DeliverGiftMsg;

                /**
                 * Verifies a DeliverGiftMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeliverGiftMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeliverGiftMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.DeliverGiftMsg;

                /**
                 * Creates a plain object from a DeliverGiftMsg message. Also converts values to other types if specified.
                 * @param message DeliverGiftMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.DeliverGiftMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeliverGiftMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BitappMsg. */
            interface IBitappMsg {

                /** BitappMsg Buff */
                Buff?: (Uint8Array|null);
            }

            /** Represents a BitappMsg. */
            class BitappMsg implements IBitappMsg {

                /**
                 * Constructs a new BitappMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IBitappMsg);

                /** BitappMsg Buff. */
                public Buff: Uint8Array;

                /**
                 * Creates a new BitappMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BitappMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IBitappMsg): Msg.MsgField.ImMsgBody.BitappMsg;

                /**
                 * Encodes the specified BitappMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.BitappMsg.verify|verify} messages.
                 * @param message BitappMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IBitappMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BitappMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.BitappMsg.verify|verify} messages.
                 * @param message BitappMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IBitappMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BitappMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BitappMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.BitappMsg;

                /**
                 * Decodes a BitappMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BitappMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.BitappMsg;

                /**
                 * Verifies a BitappMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BitappMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BitappMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.BitappMsg;

                /**
                 * Creates a plain object from a BitappMsg message. Also converts values to other types if specified.
                 * @param message BitappMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.BitappMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BitappMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OpenQqData. */
            interface IOpenQqData {

                /** OpenQqData CarQqData */
                CarQqData?: (Uint8Array|null);
            }

            /** Represents an OpenQqData. */
            class OpenQqData implements IOpenQqData {

                /**
                 * Constructs a new OpenQqData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IOpenQqData);

                /** OpenQqData CarQqData. */
                public CarQqData: Uint8Array;

                /**
                 * Creates a new OpenQqData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OpenQqData instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IOpenQqData): Msg.MsgField.ImMsgBody.OpenQqData;

                /**
                 * Encodes the specified OpenQqData message. Does not implicitly {@link Msg.MsgField.ImMsgBody.OpenQqData.verify|verify} messages.
                 * @param message OpenQqData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IOpenQqData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OpenQqData message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.OpenQqData.verify|verify} messages.
                 * @param message OpenQqData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IOpenQqData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OpenQqData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OpenQqData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.OpenQqData;

                /**
                 * Decodes an OpenQqData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OpenQqData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.OpenQqData;

                /**
                 * Verifies an OpenQqData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OpenQqData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OpenQqData
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.OpenQqData;

                /**
                 * Creates a plain object from an OpenQqData message. Also converts values to other types if specified.
                 * @param message OpenQqData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.OpenQqData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OpenQqData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ApolloMsg. */
            interface IApolloMsg {

                /** ApolloMsg Actionid */
                Actionid?: (number|null);

                /** ApolloMsg Actionname */
                Actionname?: (Uint8Array|null);

                /** ApolloMsg Actiontext */
                Actiontext?: (Uint8Array|null);

                /** ApolloMsg Flag */
                Flag?: (number|null);

                /** ApolloMsg Peeruin */
                Peeruin?: (number|null);

                /** ApolloMsg Senderts */
                Senderts?: (number|null);

                /** ApolloMsg Peerts */
                Peerts?: (number|null);

                /** ApolloMsg Int32senderstatus */
                Int32senderstatus?: (number|null);

                /** ApolloMsg Int32peerstatus */
                Int32peerstatus?: (number|null);

                /** ApolloMsg Diytextid */
                Diytextid?: (number|null);

                /** ApolloMsg Diytextcontent */
                Diytextcontent?: (Uint8Array|null);

                /** ApolloMsg Inputtext */
                Inputtext?: (Uint8Array|null);

                /** ApolloMsg Pbreserve */
                Pbreserve?: (Uint8Array|null);
            }

            /** Represents an ApolloMsg. */
            class ApolloMsg implements IApolloMsg {

                /**
                 * Constructs a new ApolloMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IApolloMsg);

                /** ApolloMsg Actionid. */
                public Actionid: number;

                /** ApolloMsg Actionname. */
                public Actionname: Uint8Array;

                /** ApolloMsg Actiontext. */
                public Actiontext: Uint8Array;

                /** ApolloMsg Flag. */
                public Flag: number;

                /** ApolloMsg Peeruin. */
                public Peeruin: number;

                /** ApolloMsg Senderts. */
                public Senderts: number;

                /** ApolloMsg Peerts. */
                public Peerts: number;

                /** ApolloMsg Int32senderstatus. */
                public Int32senderstatus: number;

                /** ApolloMsg Int32peerstatus. */
                public Int32peerstatus: number;

                /** ApolloMsg Diytextid. */
                public Diytextid: number;

                /** ApolloMsg Diytextcontent. */
                public Diytextcontent: Uint8Array;

                /** ApolloMsg Inputtext. */
                public Inputtext: Uint8Array;

                /** ApolloMsg Pbreserve. */
                public Pbreserve: Uint8Array;

                /**
                 * Creates a new ApolloMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ApolloMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IApolloMsg): Msg.MsgField.ImMsgBody.ApolloMsg;

                /**
                 * Encodes the specified ApolloMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.ApolloMsg.verify|verify} messages.
                 * @param message ApolloMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IApolloMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ApolloMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.ApolloMsg.verify|verify} messages.
                 * @param message ApolloMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IApolloMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ApolloMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ApolloMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.ApolloMsg;

                /**
                 * Decodes an ApolloMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ApolloMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.ApolloMsg;

                /**
                 * Verifies an ApolloMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ApolloMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ApolloMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.ApolloMsg;

                /**
                 * Creates a plain object from an ApolloMsg message. Also converts values to other types if specified.
                 * @param message ApolloMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.ApolloMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ApolloMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GroupPubAccInfo. */
            interface IGroupPubAccInfo {

                /** GroupPubAccInfo PubAccount */
                PubAccount?: (number|Long|null);
            }

            /** Represents a GroupPubAccInfo. */
            class GroupPubAccInfo implements IGroupPubAccInfo {

                /**
                 * Constructs a new GroupPubAccInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IGroupPubAccInfo);

                /** GroupPubAccInfo PubAccount. */
                public PubAccount: (number|Long);

                /**
                 * Creates a new GroupPubAccInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupPubAccInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IGroupPubAccInfo): Msg.MsgField.ImMsgBody.GroupPubAccInfo;

                /**
                 * Encodes the specified GroupPubAccInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupPubAccInfo.verify|verify} messages.
                 * @param message GroupPubAccInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IGroupPubAccInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupPubAccInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupPubAccInfo.verify|verify} messages.
                 * @param message GroupPubAccInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IGroupPubAccInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupPubAccInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupPubAccInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.GroupPubAccInfo;

                /**
                 * Decodes a GroupPubAccInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupPubAccInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.GroupPubAccInfo;

                /**
                 * Verifies a GroupPubAccInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupPubAccInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupPubAccInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.GroupPubAccInfo;

                /**
                 * Creates a plain object from a GroupPubAccInfo message. Also converts values to other types if specified.
                 * @param message GroupPubAccInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.GroupPubAccInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupPubAccInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BlessMsg. */
            interface IBlessMsg {

                /** BlessMsg Type */
                Type?: (number|null);

                /** BlessMsg ExFlag */
                ExFlag?: (number|null);
            }

            /** Represents a BlessMsg. */
            class BlessMsg implements IBlessMsg {

                /**
                 * Constructs a new BlessMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IBlessMsg);

                /** BlessMsg Type. */
                public Type: number;

                /** BlessMsg ExFlag. */
                public ExFlag: number;

                /**
                 * Creates a new BlessMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BlessMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IBlessMsg): Msg.MsgField.ImMsgBody.BlessMsg;

                /**
                 * Encodes the specified BlessMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.BlessMsg.verify|verify} messages.
                 * @param message BlessMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IBlessMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BlessMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.BlessMsg.verify|verify} messages.
                 * @param message BlessMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IBlessMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BlessMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BlessMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.BlessMsg;

                /**
                 * Decodes a BlessMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BlessMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.BlessMsg;

                /**
                 * Verifies a BlessMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BlessMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BlessMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.BlessMsg;

                /**
                 * Creates a plain object from a BlessMsg message. Also converts values to other types if specified.
                 * @param message BlessMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.BlessMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BlessMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SrcMsg. */
            interface ISrcMsg {

                /** SrcMsg Origseqs */
                Origseqs?: (number[]|null);

                /** SrcMsg Senderuin */
                Senderuin?: (number|Long|null);

                /** SrcMsg Time */
                Time?: (number|null);

                /** SrcMsg Flag */
                Flag?: (number|null);

                /** SrcMsg Elems */
                Elems?: (Msg.MsgField.ImMsgBody.IElem[]|null);

                /** SrcMsg Type */
                Type?: (number|null);

                /** SrcMsg Richmsg */
                Richmsg?: (Uint8Array|null);

                /** SrcMsg Pbreserve */
                Pbreserve?: (Uint8Array|null);

                /** SrcMsg Srcmsg */
                Srcmsg?: (Uint8Array|null);

                /** SrcMsg Touin */
                Touin?: (number|Long|null);

                /** SrcMsg Troopname */
                Troopname?: (Uint8Array|null);
            }

            /** Represents a SrcMsg. */
            class SrcMsg implements ISrcMsg {

                /**
                 * Constructs a new SrcMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ISrcMsg);

                /** SrcMsg Origseqs. */
                public Origseqs: number[];

                /** SrcMsg Senderuin. */
                public Senderuin: (number|Long);

                /** SrcMsg Time. */
                public Time: number;

                /** SrcMsg Flag. */
                public Flag: number;

                /** SrcMsg Elems. */
                public Elems: Msg.MsgField.ImMsgBody.IElem[];

                /** SrcMsg Type. */
                public Type: number;

                /** SrcMsg Richmsg. */
                public Richmsg: Uint8Array;

                /** SrcMsg Pbreserve. */
                public Pbreserve: Uint8Array;

                /** SrcMsg Srcmsg. */
                public Srcmsg: Uint8Array;

                /** SrcMsg Touin. */
                public Touin: (number|Long);

                /** SrcMsg Troopname. */
                public Troopname: Uint8Array;

                /**
                 * Creates a new SrcMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SrcMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ISrcMsg): Msg.MsgField.ImMsgBody.SrcMsg;

                /**
                 * Encodes the specified SrcMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.SrcMsg.verify|verify} messages.
                 * @param message SrcMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ISrcMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SrcMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.SrcMsg.verify|verify} messages.
                 * @param message SrcMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ISrcMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SrcMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SrcMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.SrcMsg;

                /**
                 * Decodes a SrcMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SrcMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.SrcMsg;

                /**
                 * Verifies a SrcMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SrcMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SrcMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.SrcMsg;

                /**
                 * Creates a plain object from a SrcMsg message. Also converts values to other types if specified.
                 * @param message SrcMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.SrcMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SrcMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LolaMsg. */
            interface ILolaMsg {

                /** LolaMsg Msgresid */
                Msgresid?: (Uint8Array|null);

                /** LolaMsg Encodecontent */
                Encodecontent?: (Uint8Array|null);

                /** LolaMsg Longmsgurl */
                Longmsgurl?: (Uint8Array|null);

                /** LolaMsg Downloadkey */
                Downloadkey?: (Uint8Array|null);
            }

            /** Represents a LolaMsg. */
            class LolaMsg implements ILolaMsg {

                /**
                 * Constructs a new LolaMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ILolaMsg);

                /** LolaMsg Msgresid. */
                public Msgresid: Uint8Array;

                /** LolaMsg Encodecontent. */
                public Encodecontent: Uint8Array;

                /** LolaMsg Longmsgurl. */
                public Longmsgurl: Uint8Array;

                /** LolaMsg Downloadkey. */
                public Downloadkey: Uint8Array;

                /**
                 * Creates a new LolaMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LolaMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ILolaMsg): Msg.MsgField.ImMsgBody.LolaMsg;

                /**
                 * Encodes the specified LolaMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.LolaMsg.verify|verify} messages.
                 * @param message LolaMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ILolaMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LolaMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.LolaMsg.verify|verify} messages.
                 * @param message LolaMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ILolaMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LolaMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LolaMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.LolaMsg;

                /**
                 * Decodes a LolaMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LolaMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.LolaMsg;

                /**
                 * Verifies a LolaMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LolaMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LolaMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.LolaMsg;

                /**
                 * Creates a plain object from a LolaMsg message. Also converts values to other types if specified.
                 * @param message LolaMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.LolaMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LolaMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GroupBusinessMsg. */
            interface IGroupBusinessMsg {

                /** GroupBusinessMsg Flags */
                Flags?: (number|null);

                /** GroupBusinessMsg Headurl */
                Headurl?: (Uint8Array|null);

                /** GroupBusinessMsg Headclkurl */
                Headclkurl?: (Uint8Array|null);

                /** GroupBusinessMsg Nick */
                Nick?: (Uint8Array|null);

                /** GroupBusinessMsg Nickcolor */
                Nickcolor?: (Uint8Array|null);

                /** GroupBusinessMsg Rank */
                Rank?: (Uint8Array|null);

                /** GroupBusinessMsg Rankcolor */
                Rankcolor?: (Uint8Array|null);

                /** GroupBusinessMsg Rankbgcolor */
                Rankbgcolor?: (Uint8Array|null);
            }

            /** Represents a GroupBusinessMsg. */
            class GroupBusinessMsg implements IGroupBusinessMsg {

                /**
                 * Constructs a new GroupBusinessMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IGroupBusinessMsg);

                /** GroupBusinessMsg Flags. */
                public Flags: number;

                /** GroupBusinessMsg Headurl. */
                public Headurl: Uint8Array;

                /** GroupBusinessMsg Headclkurl. */
                public Headclkurl: Uint8Array;

                /** GroupBusinessMsg Nick. */
                public Nick: Uint8Array;

                /** GroupBusinessMsg Nickcolor. */
                public Nickcolor: Uint8Array;

                /** GroupBusinessMsg Rank. */
                public Rank: Uint8Array;

                /** GroupBusinessMsg Rankcolor. */
                public Rankcolor: Uint8Array;

                /** GroupBusinessMsg Rankbgcolor. */
                public Rankbgcolor: Uint8Array;

                /**
                 * Creates a new GroupBusinessMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupBusinessMsg instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IGroupBusinessMsg): Msg.MsgField.ImMsgBody.GroupBusinessMsg;

                /**
                 * Encodes the specified GroupBusinessMsg message. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupBusinessMsg.verify|verify} messages.
                 * @param message GroupBusinessMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IGroupBusinessMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupBusinessMsg message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupBusinessMsg.verify|verify} messages.
                 * @param message GroupBusinessMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IGroupBusinessMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupBusinessMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupBusinessMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.GroupBusinessMsg;

                /**
                 * Decodes a GroupBusinessMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupBusinessMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.GroupBusinessMsg;

                /**
                 * Verifies a GroupBusinessMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupBusinessMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupBusinessMsg
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.GroupBusinessMsg;

                /**
                 * Creates a plain object from a GroupBusinessMsg message. Also converts values to other types if specified.
                 * @param message GroupBusinessMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.GroupBusinessMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupBusinessMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgWorkflowNotify. */
            interface IMsgWorkflowNotify {

                /** MsgWorkflowNotify Extmsg */
                Extmsg?: (Uint8Array|null);

                /** MsgWorkflowNotify Createuin */
                Createuin?: (number|Long|null);
            }

            /** Represents a MsgWorkflowNotify. */
            class MsgWorkflowNotify implements IMsgWorkflowNotify {

                /**
                 * Constructs a new MsgWorkflowNotify.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IMsgWorkflowNotify);

                /** MsgWorkflowNotify Extmsg. */
                public Extmsg: Uint8Array;

                /** MsgWorkflowNotify Createuin. */
                public Createuin: (number|Long);

                /**
                 * Creates a new MsgWorkflowNotify instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgWorkflowNotify instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IMsgWorkflowNotify): Msg.MsgField.ImMsgBody.MsgWorkflowNotify;

                /**
                 * Encodes the specified MsgWorkflowNotify message. Does not implicitly {@link Msg.MsgField.ImMsgBody.MsgWorkflowNotify.verify|verify} messages.
                 * @param message MsgWorkflowNotify message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IMsgWorkflowNotify, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgWorkflowNotify message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.MsgWorkflowNotify.verify|verify} messages.
                 * @param message MsgWorkflowNotify message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IMsgWorkflowNotify, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgWorkflowNotify message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgWorkflowNotify
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.MsgWorkflowNotify;

                /**
                 * Decodes a MsgWorkflowNotify message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgWorkflowNotify
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.MsgWorkflowNotify;

                /**
                 * Verifies a MsgWorkflowNotify message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgWorkflowNotify message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgWorkflowNotify
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.MsgWorkflowNotify;

                /**
                 * Creates a plain object from a MsgWorkflowNotify message. Also converts values to other types if specified.
                 * @param message MsgWorkflowNotify
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.MsgWorkflowNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgWorkflowNotify to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PatElem. */
            interface IPatElem {

                /** PatElem Pattype */
                Pattype?: (number|null);

                /** PatElem Patcount */
                Patcount?: (number|null);
            }

            /** Represents a PatElem. */
            class PatElem implements IPatElem {

                /**
                 * Constructs a new PatElem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IPatElem);

                /** PatElem Pattype. */
                public Pattype: number;

                /** PatElem Patcount. */
                public Patcount: number;

                /**
                 * Creates a new PatElem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PatElem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IPatElem): Msg.MsgField.ImMsgBody.PatElem;

                /**
                 * Encodes the specified PatElem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.PatElem.verify|verify} messages.
                 * @param message PatElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IPatElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PatElem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.PatElem.verify|verify} messages.
                 * @param message PatElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IPatElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PatElem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PatElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.PatElem;

                /**
                 * Decodes a PatElem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PatElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.PatElem;

                /**
                 * Verifies a PatElem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PatElem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PatElem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.PatElem;

                /**
                 * Creates a plain object from a PatElem message. Also converts values to other types if specified.
                 * @param message PatElem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.PatElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PatElem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GroupPostElem. */
            interface IGroupPostElem {

                /** GroupPostElem TransType */
                TransType?: (number|null);

                /** GroupPostElem TransMsg */
                TransMsg?: (Uint8Array|null);
            }

            /** Represents a GroupPostElem. */
            class GroupPostElem implements IGroupPostElem {

                /**
                 * Constructs a new GroupPostElem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IGroupPostElem);

                /** GroupPostElem TransType. */
                public TransType: number;

                /** GroupPostElem TransMsg. */
                public TransMsg: Uint8Array;

                /**
                 * Creates a new GroupPostElem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GroupPostElem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IGroupPostElem): Msg.MsgField.ImMsgBody.GroupPostElem;

                /**
                 * Encodes the specified GroupPostElem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupPostElem.verify|verify} messages.
                 * @param message GroupPostElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IGroupPostElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GroupPostElem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.GroupPostElem.verify|verify} messages.
                 * @param message GroupPostElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IGroupPostElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GroupPostElem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GroupPostElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.GroupPostElem;

                /**
                 * Decodes a GroupPostElem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GroupPostElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.GroupPostElem;

                /**
                 * Verifies a GroupPostElem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GroupPostElem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GroupPostElem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.GroupPostElem;

                /**
                 * Creates a plain object from a GroupPostElem message. Also converts values to other types if specified.
                 * @param message GroupPostElem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.GroupPostElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GroupPostElem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LightApp. */
            interface ILightApp {

                /** LightApp Data */
                Data?: (Uint8Array|null);

                /** LightApp MsgResId */
                MsgResId?: (Uint8Array|null);
            }

            /** Represents a LightApp. */
            class LightApp implements ILightApp {

                /**
                 * Constructs a new LightApp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ILightApp);

                /** LightApp Data. */
                public Data: Uint8Array;

                /** LightApp MsgResId. */
                public MsgResId: Uint8Array;

                /**
                 * Creates a new LightApp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LightApp instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ILightApp): Msg.MsgField.ImMsgBody.LightApp;

                /**
                 * Encodes the specified LightApp message. Does not implicitly {@link Msg.MsgField.ImMsgBody.LightApp.verify|verify} messages.
                 * @param message LightApp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ILightApp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LightApp message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.LightApp.verify|verify} messages.
                 * @param message LightApp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ILightApp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LightApp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LightApp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.LightApp;

                /**
                 * Decodes a LightApp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LightApp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.LightApp;

                /**
                 * Verifies a LightApp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LightApp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LightApp
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.LightApp;

                /**
                 * Creates a plain object from a LightApp message. Also converts values to other types if specified.
                 * @param message LightApp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.LightApp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LightApp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EimInfo. */
            interface IEimInfo {

                /** EimInfo RootId */
                RootId?: (number|Long|null);

                /** EimInfo Flag */
                Flag?: (number|null);
            }

            /** Represents an EimInfo. */
            class EimInfo implements IEimInfo {

                /**
                 * Constructs a new EimInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IEimInfo);

                /** EimInfo RootId. */
                public RootId: (number|Long);

                /** EimInfo Flag. */
                public Flag: number;

                /**
                 * Creates a new EimInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EimInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IEimInfo): Msg.MsgField.ImMsgBody.EimInfo;

                /**
                 * Encodes the specified EimInfo message. Does not implicitly {@link Msg.MsgField.ImMsgBody.EimInfo.verify|verify} messages.
                 * @param message EimInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IEimInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EimInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.EimInfo.verify|verify} messages.
                 * @param message EimInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IEimInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EimInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EimInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.EimInfo;

                /**
                 * Decodes an EimInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EimInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.EimInfo;

                /**
                 * Verifies an EimInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EimInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EimInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.EimInfo;

                /**
                 * Creates a plain object from an EimInfo message. Also converts values to other types if specified.
                 * @param message EimInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.EimInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EimInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CommonElem. */
            interface ICommonElem {

                /** CommonElem Servicetype */
                Servicetype?: (number|null);

                /** CommonElem Pbelem */
                Pbelem?: (Uint8Array|null);

                /** CommonElem Businesstype */
                Businesstype?: (number|null);
            }

            /** Represents a CommonElem. */
            class CommonElem implements ICommonElem {

                /**
                 * Constructs a new CommonElem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.ICommonElem);

                /** CommonElem Servicetype. */
                public Servicetype: number;

                /** CommonElem Pbelem. */
                public Pbelem: Uint8Array;

                /** CommonElem Businesstype. */
                public Businesstype: number;

                /**
                 * Creates a new CommonElem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommonElem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.ICommonElem): Msg.MsgField.ImMsgBody.CommonElem;

                /**
                 * Encodes the specified CommonElem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.CommonElem.verify|verify} messages.
                 * @param message CommonElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.ICommonElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommonElem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.CommonElem.verify|verify} messages.
                 * @param message CommonElem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.ICommonElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommonElem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommonElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.CommonElem;

                /**
                 * Decodes a CommonElem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommonElem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.CommonElem;

                /**
                 * Verifies a CommonElem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CommonElem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommonElem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.CommonElem;

                /**
                 * Creates a plain object from a CommonElem message. Also converts values to other types if specified.
                 * @param message CommonElem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.CommonElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommonElem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Elem. */
            interface IElem {

                /** Elem Text */
                Text?: (Msg.MsgField.ImMsgBody.IText|null);

                /** Elem Face */
                Face?: (Msg.MsgField.ImMsgBody.IFace|null);

                /** Elem OnlineImage */
                OnlineImage?: (Msg.MsgField.ImMsgBody.IOnlineImage|null);

                /** Elem NotOnlineImage */
                NotOnlineImage?: (Msg.MsgField.ImMsgBody.INotOnlineImage|null);

                /** Elem TransElemInfo */
                TransElemInfo?: (Msg.MsgField.ImMsgBody.ITransElemInfo|null);

                /** Elem MarketFace */
                MarketFace?: (Msg.MsgField.ImMsgBody.IMarketFace|null);

                /** Elem ElemFlags */
                ElemFlags?: (Msg.MsgField.ImMsgBody.IElemFlags|null);

                /** Elem CustomFace */
                CustomFace?: (Msg.MsgField.ImMsgBody.ICustomFace|null);

                /** Elem ElemFlags2 */
                ElemFlags2?: (Msg.MsgField.ImMsgBody.IElemFlags2|null);

                /** Elem FunFace */
                FunFace?: (Msg.MsgField.ImMsgBody.IFunFace|null);

                /** Elem SecretFileMsg */
                SecretFileMsg?: (Msg.MsgField.ImMsgBody.ISecretFileMsg|null);

                /** Elem RichMsg */
                RichMsg?: (Msg.MsgField.ImMsgBody.IRichMsg|null);

                /** Elem GroupFile */
                GroupFile?: (Msg.MsgField.ImMsgBody.IGroupFile|null);

                /** Elem PubGroup */
                PubGroup?: (Msg.MsgField.ImMsgBody.IPubGroup|null);

                /** Elem MarketTrans */
                MarketTrans?: (Msg.MsgField.ImMsgBody.IMarketTrans|null);

                /** Elem ExtraInfo */
                ExtraInfo?: (Msg.MsgField.ImMsgBody.IExtraInfo|null);

                /** Elem ShakeWindow */
                ShakeWindow?: (Msg.MsgField.ImMsgBody.IShakeWindow|null);

                /** Elem PubAccount */
                PubAccount?: (Msg.MsgField.ImMsgBody.IPubAccount|null);

                /** Elem VideoFile */
                VideoFile?: (Msg.MsgField.ImMsgBody.IVideoFile|null);

                /** Elem TipsInfo */
                TipsInfo?: (Msg.MsgField.ImMsgBody.ITipsInfo|null);

                /** Elem AnonGroupMsg */
                AnonGroupMsg?: (Msg.MsgField.ImMsgBody.IAnonGroupMsg|null);

                /** Elem QqLiveOld */
                QqLiveOld?: (Msg.MsgField.ImMsgBody.IQqLiveOld|null);

                /** Elem LifeOnline */
                LifeOnline?: (Msg.MsgField.ImMsgBody.ILifeOnline|null);

                /** Elem QQWalletMsg */
                QQWalletMsg?: (Msg.MsgField.ImMsgBody.IQQWalletMsg|null);

                /** Elem CrmElem */
                CrmElem?: (Msg.MsgField.ImMsgBody.ICrmElem|null);

                /** Elem ConferenceTipsInfo */
                ConferenceTipsInfo?: (Msg.MsgField.ImMsgBody.IConferenceTipsInfo|null);

                /** Elem RedbagInfo */
                RedbagInfo?: (Msg.MsgField.ImMsgBody.IRedbagInfo|null);

                /** Elem LowVersionTips */
                LowVersionTips?: (Msg.MsgField.ImMsgBody.ILowVersionTips|null);

                /** Elem BankcodeCtrlInfo */
                BankcodeCtrlInfo?: (Uint8Array|null);

                /** Elem NearByMsg */
                NearByMsg?: (Msg.MsgField.ImMsgBody.INearByMsg|null);

                /** Elem CustomElem */
                CustomElem?: (Msg.MsgField.ImMsgBody.ICustomElem|null);

                /** Elem LocationInfo */
                LocationInfo?: (Msg.MsgField.ImMsgBody.ILocationInfo|null);

                /** Elem PubAccInfo */
                PubAccInfo?: (Msg.MsgField.ImMsgBody.IPubAccInfo|null);

                /** Elem SmallEmoji */
                SmallEmoji?: (Msg.MsgField.ImMsgBody.ISmallEmoji|null);

                /** Elem FsjMsgElem */
                FsjMsgElem?: (Msg.MsgField.ImMsgBody.IFsjMsgElem|null);

                /** Elem ArkApp */
                ArkApp?: (Msg.MsgField.ImMsgBody.IArkApp|null);

                /** Elem GeneralFlags */
                GeneralFlags?: (Msg.MsgField.ImMsgBody.IGeneralFlags|null);

                /** Elem HcFlashPic */
                HcFlashPic?: (Msg.MsgField.ImMsgBody.IHcFlashPic|null);

                /** Elem DeliverGiftMsg */
                DeliverGiftMsg?: (Msg.MsgField.ImMsgBody.IDeliverGiftMsg|null);

                /** Elem BitappMsg */
                BitappMsg?: (Msg.MsgField.ImMsgBody.IBitappMsg|null);

                /** Elem OpenQqData */
                OpenQqData?: (Msg.MsgField.ImMsgBody.IOpenQqData|null);

                /** Elem ApolloMsg */
                ApolloMsg?: (Msg.MsgField.ImMsgBody.IApolloMsg|null);

                /** Elem GroupPubAccInfo */
                GroupPubAccInfo?: (Msg.MsgField.ImMsgBody.IGroupPubAccInfo|null);

                /** Elem BlessMsg */
                BlessMsg?: (Msg.MsgField.ImMsgBody.IBlessMsg|null);

                /** Elem SrcMsg */
                SrcMsg?: (Msg.MsgField.ImMsgBody.ISrcMsg|null);

                /** Elem LolaMsg */
                LolaMsg?: (Msg.MsgField.ImMsgBody.ILolaMsg|null);

                /** Elem GroupBusinessMsg */
                GroupBusinessMsg?: (Msg.MsgField.ImMsgBody.IGroupBusinessMsg|null);

                /** Elem MsgWorkflowNotify */
                MsgWorkflowNotify?: (Msg.MsgField.ImMsgBody.IMsgWorkflowNotify|null);

                /** Elem PatElem */
                PatElem?: (Msg.MsgField.ImMsgBody.IPatElem|null);

                /** Elem GroupPostElem */
                GroupPostElem?: (Msg.MsgField.ImMsgBody.IGroupPostElem|null);

                /** Elem LightApp */
                LightApp?: (Msg.MsgField.ImMsgBody.ILightApp|null);

                /** Elem EimInfo */
                EimInfo?: (Msg.MsgField.ImMsgBody.IEimInfo|null);

                /** Elem CommonElem */
                CommonElem?: (Msg.MsgField.ImMsgBody.ICommonElem|null);
            }

            /** Represents an Elem. */
            class Elem implements IElem {

                /**
                 * Constructs a new Elem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IElem);

                /** Elem Text. */
                public Text?: (Msg.MsgField.ImMsgBody.IText|null);

                /** Elem Face. */
                public Face?: (Msg.MsgField.ImMsgBody.IFace|null);

                /** Elem OnlineImage. */
                public OnlineImage?: (Msg.MsgField.ImMsgBody.IOnlineImage|null);

                /** Elem NotOnlineImage. */
                public NotOnlineImage?: (Msg.MsgField.ImMsgBody.INotOnlineImage|null);

                /** Elem TransElemInfo. */
                public TransElemInfo?: (Msg.MsgField.ImMsgBody.ITransElemInfo|null);

                /** Elem MarketFace. */
                public MarketFace?: (Msg.MsgField.ImMsgBody.IMarketFace|null);

                /** Elem ElemFlags. */
                public ElemFlags?: (Msg.MsgField.ImMsgBody.IElemFlags|null);

                /** Elem CustomFace. */
                public CustomFace?: (Msg.MsgField.ImMsgBody.ICustomFace|null);

                /** Elem ElemFlags2. */
                public ElemFlags2?: (Msg.MsgField.ImMsgBody.IElemFlags2|null);

                /** Elem FunFace. */
                public FunFace?: (Msg.MsgField.ImMsgBody.IFunFace|null);

                /** Elem SecretFileMsg. */
                public SecretFileMsg?: (Msg.MsgField.ImMsgBody.ISecretFileMsg|null);

                /** Elem RichMsg. */
                public RichMsg?: (Msg.MsgField.ImMsgBody.IRichMsg|null);

                /** Elem GroupFile. */
                public GroupFile?: (Msg.MsgField.ImMsgBody.IGroupFile|null);

                /** Elem PubGroup. */
                public PubGroup?: (Msg.MsgField.ImMsgBody.IPubGroup|null);

                /** Elem MarketTrans. */
                public MarketTrans?: (Msg.MsgField.ImMsgBody.IMarketTrans|null);

                /** Elem ExtraInfo. */
                public ExtraInfo?: (Msg.MsgField.ImMsgBody.IExtraInfo|null);

                /** Elem ShakeWindow. */
                public ShakeWindow?: (Msg.MsgField.ImMsgBody.IShakeWindow|null);

                /** Elem PubAccount. */
                public PubAccount?: (Msg.MsgField.ImMsgBody.IPubAccount|null);

                /** Elem VideoFile. */
                public VideoFile?: (Msg.MsgField.ImMsgBody.IVideoFile|null);

                /** Elem TipsInfo. */
                public TipsInfo?: (Msg.MsgField.ImMsgBody.ITipsInfo|null);

                /** Elem AnonGroupMsg. */
                public AnonGroupMsg?: (Msg.MsgField.ImMsgBody.IAnonGroupMsg|null);

                /** Elem QqLiveOld. */
                public QqLiveOld?: (Msg.MsgField.ImMsgBody.IQqLiveOld|null);

                /** Elem LifeOnline. */
                public LifeOnline?: (Msg.MsgField.ImMsgBody.ILifeOnline|null);

                /** Elem QQWalletMsg. */
                public QQWalletMsg?: (Msg.MsgField.ImMsgBody.IQQWalletMsg|null);

                /** Elem CrmElem. */
                public CrmElem?: (Msg.MsgField.ImMsgBody.ICrmElem|null);

                /** Elem ConferenceTipsInfo. */
                public ConferenceTipsInfo?: (Msg.MsgField.ImMsgBody.IConferenceTipsInfo|null);

                /** Elem RedbagInfo. */
                public RedbagInfo?: (Msg.MsgField.ImMsgBody.IRedbagInfo|null);

                /** Elem LowVersionTips. */
                public LowVersionTips?: (Msg.MsgField.ImMsgBody.ILowVersionTips|null);

                /** Elem BankcodeCtrlInfo. */
                public BankcodeCtrlInfo: Uint8Array;

                /** Elem NearByMsg. */
                public NearByMsg?: (Msg.MsgField.ImMsgBody.INearByMsg|null);

                /** Elem CustomElem. */
                public CustomElem?: (Msg.MsgField.ImMsgBody.ICustomElem|null);

                /** Elem LocationInfo. */
                public LocationInfo?: (Msg.MsgField.ImMsgBody.ILocationInfo|null);

                /** Elem PubAccInfo. */
                public PubAccInfo?: (Msg.MsgField.ImMsgBody.IPubAccInfo|null);

                /** Elem SmallEmoji. */
                public SmallEmoji?: (Msg.MsgField.ImMsgBody.ISmallEmoji|null);

                /** Elem FsjMsgElem. */
                public FsjMsgElem?: (Msg.MsgField.ImMsgBody.IFsjMsgElem|null);

                /** Elem ArkApp. */
                public ArkApp?: (Msg.MsgField.ImMsgBody.IArkApp|null);

                /** Elem GeneralFlags. */
                public GeneralFlags?: (Msg.MsgField.ImMsgBody.IGeneralFlags|null);

                /** Elem HcFlashPic. */
                public HcFlashPic?: (Msg.MsgField.ImMsgBody.IHcFlashPic|null);

                /** Elem DeliverGiftMsg. */
                public DeliverGiftMsg?: (Msg.MsgField.ImMsgBody.IDeliverGiftMsg|null);

                /** Elem BitappMsg. */
                public BitappMsg?: (Msg.MsgField.ImMsgBody.IBitappMsg|null);

                /** Elem OpenQqData. */
                public OpenQqData?: (Msg.MsgField.ImMsgBody.IOpenQqData|null);

                /** Elem ApolloMsg. */
                public ApolloMsg?: (Msg.MsgField.ImMsgBody.IApolloMsg|null);

                /** Elem GroupPubAccInfo. */
                public GroupPubAccInfo?: (Msg.MsgField.ImMsgBody.IGroupPubAccInfo|null);

                /** Elem BlessMsg. */
                public BlessMsg?: (Msg.MsgField.ImMsgBody.IBlessMsg|null);

                /** Elem SrcMsg. */
                public SrcMsg?: (Msg.MsgField.ImMsgBody.ISrcMsg|null);

                /** Elem LolaMsg. */
                public LolaMsg?: (Msg.MsgField.ImMsgBody.ILolaMsg|null);

                /** Elem GroupBusinessMsg. */
                public GroupBusinessMsg?: (Msg.MsgField.ImMsgBody.IGroupBusinessMsg|null);

                /** Elem MsgWorkflowNotify. */
                public MsgWorkflowNotify?: (Msg.MsgField.ImMsgBody.IMsgWorkflowNotify|null);

                /** Elem PatElem. */
                public PatElem?: (Msg.MsgField.ImMsgBody.IPatElem|null);

                /** Elem GroupPostElem. */
                public GroupPostElem?: (Msg.MsgField.ImMsgBody.IGroupPostElem|null);

                /** Elem LightApp. */
                public LightApp?: (Msg.MsgField.ImMsgBody.ILightApp|null);

                /** Elem EimInfo. */
                public EimInfo?: (Msg.MsgField.ImMsgBody.IEimInfo|null);

                /** Elem CommonElem. */
                public CommonElem?: (Msg.MsgField.ImMsgBody.ICommonElem|null);

                /**
                 * Creates a new Elem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Elem instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IElem): Msg.MsgField.ImMsgBody.Elem;

                /**
                 * Encodes the specified Elem message. Does not implicitly {@link Msg.MsgField.ImMsgBody.Elem.verify|verify} messages.
                 * @param message Elem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Elem message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.Elem.verify|verify} messages.
                 * @param message Elem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IElem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Elem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Elem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.Elem;

                /**
                 * Decodes an Elem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Elem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.Elem;

                /**
                 * Verifies an Elem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Elem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Elem
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.Elem;

                /**
                 * Creates a plain object from an Elem message. Also converts values to other types if specified.
                 * @param message Elem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.Elem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Elem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RichText. */
            interface IRichText {

                /** RichText Attribute */
                Attribute?: (Msg.MsgField.ImMsgBody.IAttribute|null);

                /** RichText MutableList */
                MutableList?: (Msg.MsgField.ImMsgBody.IElem[]|null);

                /** RichText NotOnlineFile */
                NotOnlineFile?: (Msg.MsgField.ImMsgBody.INotOnlineFile|null);

                /** RichText Ptt */
                Ptt?: (Msg.MsgField.ImMsgBody.IPtt|null);

                /** RichText TmpPtt */
                TmpPtt?: (Msg.MsgField.ImMsgBody.ITmpPtt|null);

                /** RichText Trans211TmpMsg */
                Trans211TmpMsg?: (Msg.MsgField.ImMsgBody.ITrans211TmpMsg|null);
            }

            /** Represents a RichText. */
            class RichText implements IRichText {

                /**
                 * Constructs a new RichText.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IRichText);

                /** RichText Attribute. */
                public Attribute?: (Msg.MsgField.ImMsgBody.IAttribute|null);

                /** RichText MutableList. */
                public MutableList: Msg.MsgField.ImMsgBody.IElem[];

                /** RichText NotOnlineFile. */
                public NotOnlineFile?: (Msg.MsgField.ImMsgBody.INotOnlineFile|null);

                /** RichText Ptt. */
                public Ptt?: (Msg.MsgField.ImMsgBody.IPtt|null);

                /** RichText TmpPtt. */
                public TmpPtt?: (Msg.MsgField.ImMsgBody.ITmpPtt|null);

                /** RichText Trans211TmpMsg. */
                public Trans211TmpMsg?: (Msg.MsgField.ImMsgBody.ITrans211TmpMsg|null);

                /**
                 * Creates a new RichText instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RichText instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IRichText): Msg.MsgField.ImMsgBody.RichText;

                /**
                 * Encodes the specified RichText message. Does not implicitly {@link Msg.MsgField.ImMsgBody.RichText.verify|verify} messages.
                 * @param message RichText message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IRichText, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RichText message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.RichText.verify|verify} messages.
                 * @param message RichText message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IRichText, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RichText message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RichText
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.RichText;

                /**
                 * Decodes a RichText message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RichText
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.RichText;

                /**
                 * Verifies a RichText message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RichText message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RichText
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.RichText;

                /**
                 * Creates a plain object from a RichText message. Also converts values to other types if specified.
                 * @param message RichText
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.RichText, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RichText to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgBody. */
            interface IMsgBody {

                /** MsgBody RichText */
                RichText?: (Msg.MsgField.ImMsgBody.IRichText|null);

                /** MsgBody MsgContent */
                MsgContent?: (Uint8Array|null);

                /** MsgBody MsgEncryptContent */
                MsgEncryptContent?: (Uint8Array|null);
            }

            /** Represents a MsgBody. */
            class MsgBody implements IMsgBody {

                /**
                 * Constructs a new MsgBody.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgBody.IMsgBody);

                /** MsgBody RichText. */
                public RichText?: (Msg.MsgField.ImMsgBody.IRichText|null);

                /** MsgBody MsgContent. */
                public MsgContent: Uint8Array;

                /** MsgBody MsgEncryptContent. */
                public MsgEncryptContent: Uint8Array;

                /**
                 * Creates a new MsgBody instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBody instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgBody.IMsgBody): Msg.MsgField.ImMsgBody.MsgBody;

                /**
                 * Encodes the specified MsgBody message. Does not implicitly {@link Msg.MsgField.ImMsgBody.MsgBody.verify|verify} messages.
                 * @param message MsgBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgBody.IMsgBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgBody message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgBody.MsgBody.verify|verify} messages.
                 * @param message MsgBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgBody.IMsgBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgBody message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgBody.MsgBody;

                /**
                 * Decodes a MsgBody message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgBody.MsgBody;

                /**
                 * Verifies a MsgBody message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgBody message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgBody
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgBody.MsgBody;

                /**
                 * Creates a plain object from a MsgBody message. Also converts values to other types if specified.
                 * @param message MsgBody
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgBody.MsgBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgBody to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ImMsgHead. */
        interface IImMsgHead {
        }

        /** Represents an ImMsgHead. */
        class ImMsgHead implements IImMsgHead {

            /**
             * Constructs a new ImMsgHead.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IImMsgHead);

            /**
             * Creates a new ImMsgHead instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImMsgHead instance
             */
            public static create(properties?: Msg.MsgField.IImMsgHead): Msg.MsgField.ImMsgHead;

            /**
             * Encodes the specified ImMsgHead message. Does not implicitly {@link Msg.MsgField.ImMsgHead.verify|verify} messages.
             * @param message ImMsgHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IImMsgHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImMsgHead message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgHead.verify|verify} messages.
             * @param message ImMsgHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IImMsgHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImMsgHead message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImMsgHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgHead;

            /**
             * Decodes an ImMsgHead message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImMsgHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgHead;

            /**
             * Verifies an ImMsgHead message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImMsgHead message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImMsgHead
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgHead;

            /**
             * Creates a plain object from an ImMsgHead message. Also converts values to other types if specified.
             * @param message ImMsgHead
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.ImMsgHead, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImMsgHead to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ImMsgHead {

            /** Properties of an InstInfo. */
            interface IInstInfo {

                /** InstInfo Appid */
                Appid?: (number|null);

                /** InstInfo Instid */
                Instid?: (number|null);

                /** InstInfo Platform */
                Platform?: (number|null);

                /** InstInfo EnumDeviceType */
                EnumDeviceType?: (number|null);
            }

            /** Represents an InstInfo. */
            class InstInfo implements IInstInfo {

                /**
                 * Constructs a new InstInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgHead.IInstInfo);

                /** InstInfo Appid. */
                public Appid: number;

                /** InstInfo Instid. */
                public Instid: number;

                /** InstInfo Platform. */
                public Platform: number;

                /** InstInfo EnumDeviceType. */
                public EnumDeviceType: number;

                /**
                 * Creates a new InstInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InstInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgHead.IInstInfo): Msg.MsgField.ImMsgHead.InstInfo;

                /**
                 * Encodes the specified InstInfo message. Does not implicitly {@link Msg.MsgField.ImMsgHead.InstInfo.verify|verify} messages.
                 * @param message InstInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgHead.IInstInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InstInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgHead.InstInfo.verify|verify} messages.
                 * @param message InstInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgHead.IInstInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InstInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InstInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgHead.InstInfo;

                /**
                 * Decodes an InstInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InstInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgHead.InstInfo;

                /**
                 * Verifies an InstInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InstInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InstInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgHead.InstInfo;

                /**
                 * Creates a plain object from an InstInfo message. Also converts values to other types if specified.
                 * @param message InstInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgHead.InstInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InstInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InstCtrl. */
            interface IInstCtrl {

                /** InstCtrl MsgSendToInst */
                MsgSendToInst?: (Msg.MsgField.ImMsgHead.IInstInfo[]|null);

                /** InstCtrl MsgExcludeInst */
                MsgExcludeInst?: (Msg.MsgField.ImMsgHead.IInstInfo[]|null);

                /** InstCtrl MsgFromInst */
                MsgFromInst?: (Msg.MsgField.ImMsgHead.IInstInfo|null);
            }

            /** Represents an InstCtrl. */
            class InstCtrl implements IInstCtrl {

                /**
                 * Constructs a new InstCtrl.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImMsgHead.IInstCtrl);

                /** InstCtrl MsgSendToInst. */
                public MsgSendToInst: Msg.MsgField.ImMsgHead.IInstInfo[];

                /** InstCtrl MsgExcludeInst. */
                public MsgExcludeInst: Msg.MsgField.ImMsgHead.IInstInfo[];

                /** InstCtrl MsgFromInst. */
                public MsgFromInst?: (Msg.MsgField.ImMsgHead.IInstInfo|null);

                /**
                 * Creates a new InstCtrl instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InstCtrl instance
                 */
                public static create(properties?: Msg.MsgField.ImMsgHead.IInstCtrl): Msg.MsgField.ImMsgHead.InstCtrl;

                /**
                 * Encodes the specified InstCtrl message. Does not implicitly {@link Msg.MsgField.ImMsgHead.InstCtrl.verify|verify} messages.
                 * @param message InstCtrl message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImMsgHead.IInstCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InstCtrl message, length delimited. Does not implicitly {@link Msg.MsgField.ImMsgHead.InstCtrl.verify|verify} messages.
                 * @param message InstCtrl message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImMsgHead.IInstCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InstCtrl message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InstCtrl
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImMsgHead.InstCtrl;

                /**
                 * Decodes an InstCtrl message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InstCtrl
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImMsgHead.InstCtrl;

                /**
                 * Verifies an InstCtrl message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InstCtrl message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InstCtrl
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImMsgHead.InstCtrl;

                /**
                 * Creates a plain object from an InstCtrl message. Also converts values to other types if specified.
                 * @param message InstCtrl
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImMsgHead.InstCtrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InstCtrl to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a PluginInfo. */
        interface IPluginInfo {

            /** PluginInfo ResId */
            ResId?: (number|null);

            /** PluginInfo PkgName */
            PkgName?: (string|null);

            /** PluginInfo NewVar */
            NewVar?: (number|null);

            /** PluginInfo ResType */
            ResType?: (number|null);

            /** PluginInfo LanType */
            LanType?: (number|null);

            /** PluginInfo Priority */
            Priority?: (number|null);

            /** PluginInfo ResName */
            ResName?: (string|null);

            /** PluginInfo ResDesc */
            ResDesc?: (string|null);

            /** PluginInfo ResUrlBig */
            ResUrlBig?: (string|null);

            /** PluginInfo ResUrlSmall */
            ResUrlSmall?: (string|null);

            /** PluginInfo ResConf */
            ResConf?: (string|null);
        }

        /** Represents a PluginInfo. */
        class PluginInfo implements IPluginInfo {

            /**
             * Constructs a new PluginInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IPluginInfo);

            /** PluginInfo ResId. */
            public ResId: number;

            /** PluginInfo PkgName. */
            public PkgName: string;

            /** PluginInfo NewVar. */
            public NewVar: number;

            /** PluginInfo ResType. */
            public ResType: number;

            /** PluginInfo LanType. */
            public LanType: number;

            /** PluginInfo Priority. */
            public Priority: number;

            /** PluginInfo ResName. */
            public ResName: string;

            /** PluginInfo ResDesc. */
            public ResDesc: string;

            /** PluginInfo ResUrlBig. */
            public ResUrlBig: string;

            /** PluginInfo ResUrlSmall. */
            public ResUrlSmall: string;

            /** PluginInfo ResConf. */
            public ResConf: string;

            /**
             * Creates a new PluginInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PluginInfo instance
             */
            public static create(properties?: Msg.MsgField.IPluginInfo): Msg.MsgField.PluginInfo;

            /**
             * Encodes the specified PluginInfo message. Does not implicitly {@link Msg.MsgField.PluginInfo.verify|verify} messages.
             * @param message PluginInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IPluginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PluginInfo message, length delimited. Does not implicitly {@link Msg.MsgField.PluginInfo.verify|verify} messages.
             * @param message PluginInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IPluginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PluginInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PluginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PluginInfo;

            /**
             * Decodes a PluginInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PluginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PluginInfo;

            /**
             * Verifies a PluginInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PluginInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PluginInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.PluginInfo;

            /**
             * Creates a plain object from a PluginInfo message. Also converts values to other types if specified.
             * @param message PluginInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.PluginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PluginInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AppShareInfo. */
        interface IAppShareInfo {

            /** AppShareInfo AppshareId */
            AppshareId?: (number|null);

            /** AppShareInfo AppshareCookie */
            AppshareCookie?: (Uint8Array|null);

            /** AppShareInfo AppshareResource */
            AppshareResource?: (Msg.MsgField.IPluginInfo|null);
        }

        /** Represents an AppShareInfo. */
        class AppShareInfo implements IAppShareInfo {

            /**
             * Constructs a new AppShareInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IAppShareInfo);

            /** AppShareInfo AppshareId. */
            public AppshareId: number;

            /** AppShareInfo AppshareCookie. */
            public AppshareCookie: Uint8Array;

            /** AppShareInfo AppshareResource. */
            public AppshareResource?: (Msg.MsgField.IPluginInfo|null);

            /**
             * Creates a new AppShareInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppShareInfo instance
             */
            public static create(properties?: Msg.MsgField.IAppShareInfo): Msg.MsgField.AppShareInfo;

            /**
             * Encodes the specified AppShareInfo message. Does not implicitly {@link Msg.MsgField.AppShareInfo.verify|verify} messages.
             * @param message AppShareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IAppShareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppShareInfo message, length delimited. Does not implicitly {@link Msg.MsgField.AppShareInfo.verify|verify} messages.
             * @param message AppShareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IAppShareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppShareInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppShareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.AppShareInfo;

            /**
             * Decodes an AppShareInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppShareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.AppShareInfo;

            /**
             * Verifies an AppShareInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppShareInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppShareInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.AppShareInfo;

            /**
             * Creates a plain object from an AppShareInfo message. Also converts values to other types if specified.
             * @param message AppShareInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.AppShareInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppShareInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a C2cTmpMsgHead. */
        interface IC2cTmpMsgHead {

            /** C2cTmpMsgHead C2cType */
            C2cType?: (number|null);

            /** C2cTmpMsgHead ServiceType */
            ServiceType?: (number|null);

            /** C2cTmpMsgHead GroupUin */
            GroupUin?: (number|Long|null);

            /** C2cTmpMsgHead groupCode */
            groupCode?: (number|Long|null);

            /** C2cTmpMsgHead Sig */
            Sig?: (Uint8Array|null);

            /** C2cTmpMsgHead SigType */
            SigType?: (number|null);

            /** C2cTmpMsgHead FromPhone */
            FromPhone?: (string|null);

            /** C2cTmpMsgHead ToPhone */
            ToPhone?: (string|null);

            /** C2cTmpMsgHead LockDisplay */
            LockDisplay?: (number|null);

            /** C2cTmpMsgHead DirectionFlag */
            DirectionFlag?: (number|null);

            /** C2cTmpMsgHead Reserved */
            Reserved?: (Uint8Array|null);
        }

        /** Represents a C2cTmpMsgHead. */
        class C2cTmpMsgHead implements IC2cTmpMsgHead {

            /**
             * Constructs a new C2cTmpMsgHead.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IC2cTmpMsgHead);

            /** C2cTmpMsgHead C2cType. */
            public C2cType: number;

            /** C2cTmpMsgHead ServiceType. */
            public ServiceType: number;

            /** C2cTmpMsgHead GroupUin. */
            public GroupUin: (number|Long);

            /** C2cTmpMsgHead groupCode. */
            public groupCode: (number|Long);

            /** C2cTmpMsgHead Sig. */
            public Sig: Uint8Array;

            /** C2cTmpMsgHead SigType. */
            public SigType: number;

            /** C2cTmpMsgHead FromPhone. */
            public FromPhone: string;

            /** C2cTmpMsgHead ToPhone. */
            public ToPhone: string;

            /** C2cTmpMsgHead LockDisplay. */
            public LockDisplay: number;

            /** C2cTmpMsgHead DirectionFlag. */
            public DirectionFlag: number;

            /** C2cTmpMsgHead Reserved. */
            public Reserved: Uint8Array;

            /**
             * Creates a new C2cTmpMsgHead instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2cTmpMsgHead instance
             */
            public static create(properties?: Msg.MsgField.IC2cTmpMsgHead): Msg.MsgField.C2cTmpMsgHead;

            /**
             * Encodes the specified C2cTmpMsgHead message. Does not implicitly {@link Msg.MsgField.C2cTmpMsgHead.verify|verify} messages.
             * @param message C2cTmpMsgHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IC2cTmpMsgHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2cTmpMsgHead message, length delimited. Does not implicitly {@link Msg.MsgField.C2cTmpMsgHead.verify|verify} messages.
             * @param message C2cTmpMsgHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IC2cTmpMsgHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2cTmpMsgHead message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2cTmpMsgHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.C2cTmpMsgHead;

            /**
             * Decodes a C2cTmpMsgHead message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2cTmpMsgHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.C2cTmpMsgHead;

            /**
             * Verifies a C2cTmpMsgHead message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2cTmpMsgHead message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2cTmpMsgHead
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.C2cTmpMsgHead;

            /**
             * Creates a plain object from a C2cTmpMsgHead message. Also converts values to other types if specified.
             * @param message C2cTmpMsgHead
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.C2cTmpMsgHead, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2cTmpMsgHead to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DiscussInfo. */
        interface IDiscussInfo {

            /** DiscussInfo DiscussUin */
            DiscussUin?: (number|Long|null);

            /** DiscussInfo DiscussType */
            DiscussType?: (number|null);

            /** DiscussInfo DiscussInfoSeq */
            DiscussInfoSeq?: (number|Long|null);

            /** DiscussInfo DiscussRemark */
            DiscussRemark?: (Uint8Array|null);

            /** DiscussInfo DiscussName */
            DiscussName?: (Uint8Array|null);
        }

        /** Represents a DiscussInfo. */
        class DiscussInfo implements IDiscussInfo {

            /**
             * Constructs a new DiscussInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IDiscussInfo);

            /** DiscussInfo DiscussUin. */
            public DiscussUin: (number|Long);

            /** DiscussInfo DiscussType. */
            public DiscussType: number;

            /** DiscussInfo DiscussInfoSeq. */
            public DiscussInfoSeq: (number|Long);

            /** DiscussInfo DiscussRemark. */
            public DiscussRemark: Uint8Array;

            /** DiscussInfo DiscussName. */
            public DiscussName: Uint8Array;

            /**
             * Creates a new DiscussInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscussInfo instance
             */
            public static create(properties?: Msg.MsgField.IDiscussInfo): Msg.MsgField.DiscussInfo;

            /**
             * Encodes the specified DiscussInfo message. Does not implicitly {@link Msg.MsgField.DiscussInfo.verify|verify} messages.
             * @param message DiscussInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IDiscussInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscussInfo message, length delimited. Does not implicitly {@link Msg.MsgField.DiscussInfo.verify|verify} messages.
             * @param message DiscussInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IDiscussInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscussInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscussInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.DiscussInfo;

            /**
             * Decodes a DiscussInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscussInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.DiscussInfo;

            /**
             * Verifies a DiscussInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscussInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscussInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.DiscussInfo;

            /**
             * Creates a plain object from a DiscussInfo message. Also converts values to other types if specified.
             * @param message DiscussInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.DiscussInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscussInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GroupInfo. */
        interface IGroupInfo {

            /** GroupInfo GroupCode */
            GroupCode?: (number|Long|null);

            /** GroupInfo GroupType */
            GroupType?: (number|null);

            /** GroupInfo GroupInfoSeq */
            GroupInfoSeq?: (number|Long|null);

            /** GroupInfo GroupCard */
            GroupCard?: (string|null);

            /** GroupInfo GroupRank */
            GroupRank?: (Uint8Array|null);

            /** GroupInfo GroupLevel */
            GroupLevel?: (number|null);

            /** GroupInfo GroupCardType */
            GroupCardType?: (number|null);

            /** GroupInfo GroupName */
            GroupName?: (Uint8Array|null);
        }

        /** Represents a GroupInfo. */
        class GroupInfo implements IGroupInfo {

            /**
             * Constructs a new GroupInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IGroupInfo);

            /** GroupInfo GroupCode. */
            public GroupCode: (number|Long);

            /** GroupInfo GroupType. */
            public GroupType: number;

            /** GroupInfo GroupInfoSeq. */
            public GroupInfoSeq: (number|Long);

            /** GroupInfo GroupCard. */
            public GroupCard: string;

            /** GroupInfo GroupRank. */
            public GroupRank: Uint8Array;

            /** GroupInfo GroupLevel. */
            public GroupLevel: number;

            /** GroupInfo GroupCardType. */
            public GroupCardType: number;

            /** GroupInfo GroupName. */
            public GroupName: Uint8Array;

            /**
             * Creates a new GroupInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupInfo instance
             */
            public static create(properties?: Msg.MsgField.IGroupInfo): Msg.MsgField.GroupInfo;

            /**
             * Encodes the specified GroupInfo message. Does not implicitly {@link Msg.MsgField.GroupInfo.verify|verify} messages.
             * @param message GroupInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link Msg.MsgField.GroupInfo.verify|verify} messages.
             * @param message GroupInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GroupInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.GroupInfo;

            /**
             * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GroupInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.GroupInfo;

            /**
             * Verifies a GroupInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.GroupInfo;

            /**
             * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
             * @param message GroupInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.GroupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MutilTransHead. */
        interface IMutilTransHead {

            /** MutilTransHead Status */
            Status?: (number|null);

            /** MutilTransHead MsgId */
            MsgId?: (number|null);
        }

        /** Represents a MutilTransHead. */
        class MutilTransHead implements IMutilTransHead {

            /**
             * Constructs a new MutilTransHead.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IMutilTransHead);

            /** MutilTransHead Status. */
            public Status: number;

            /** MutilTransHead MsgId. */
            public MsgId: number;

            /**
             * Creates a new MutilTransHead instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MutilTransHead instance
             */
            public static create(properties?: Msg.MsgField.IMutilTransHead): Msg.MsgField.MutilTransHead;

            /**
             * Encodes the specified MutilTransHead message. Does not implicitly {@link Msg.MsgField.MutilTransHead.verify|verify} messages.
             * @param message MutilTransHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IMutilTransHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MutilTransHead message, length delimited. Does not implicitly {@link Msg.MsgField.MutilTransHead.verify|verify} messages.
             * @param message MutilTransHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IMutilTransHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MutilTransHead message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MutilTransHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.MutilTransHead;

            /**
             * Decodes a MutilTransHead message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MutilTransHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.MutilTransHead;

            /**
             * Verifies a MutilTransHead message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MutilTransHead message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MutilTransHead
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.MutilTransHead;

            /**
             * Creates a plain object from a MutilTransHead message. Also converts values to other types if specified.
             * @param message MutilTransHead
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.MutilTransHead, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MutilTransHead to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExtGroupKeyInfo. */
        interface IExtGroupKeyInfo {

            /** ExtGroupKeyInfo CurMaxSeq */
            CurMaxSeq?: (number|null);

            /** ExtGroupKeyInfo CurTime */
            CurTime?: (number|Long|null);
        }

        /** Represents an ExtGroupKeyInfo. */
        class ExtGroupKeyInfo implements IExtGroupKeyInfo {

            /**
             * Constructs a new ExtGroupKeyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IExtGroupKeyInfo);

            /** ExtGroupKeyInfo CurMaxSeq. */
            public CurMaxSeq: number;

            /** ExtGroupKeyInfo CurTime. */
            public CurTime: (number|Long);

            /**
             * Creates a new ExtGroupKeyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtGroupKeyInfo instance
             */
            public static create(properties?: Msg.MsgField.IExtGroupKeyInfo): Msg.MsgField.ExtGroupKeyInfo;

            /**
             * Encodes the specified ExtGroupKeyInfo message. Does not implicitly {@link Msg.MsgField.ExtGroupKeyInfo.verify|verify} messages.
             * @param message ExtGroupKeyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IExtGroupKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtGroupKeyInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ExtGroupKeyInfo.verify|verify} messages.
             * @param message ExtGroupKeyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IExtGroupKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtGroupKeyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtGroupKeyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ExtGroupKeyInfo;

            /**
             * Decodes an ExtGroupKeyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtGroupKeyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ExtGroupKeyInfo;

            /**
             * Verifies an ExtGroupKeyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtGroupKeyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtGroupKeyInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.ExtGroupKeyInfo;

            /**
             * Creates a plain object from an ExtGroupKeyInfo message. Also converts values to other types if specified.
             * @param message ExtGroupKeyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.ExtGroupKeyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtGroupKeyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgHead. */
        interface IMsgHead {

            /** MsgHead FromUin */
            FromUin?: (number|Long|null);

            /** MsgHead ToUin */
            ToUin?: (number|Long|null);

            /** MsgHead MsgType */
            MsgType?: (number|null);

            /** MsgHead C2cCmd */
            C2cCmd?: (number|null);

            /** MsgHead MsgSeq */
            MsgSeq?: (number|null);

            /** MsgHead MsgTime */
            MsgTime?: (number|null);

            /** MsgHead MsgUid */
            MsgUid?: (number|Long|null);

            /** MsgHead C2CTmpMsgHead */
            C2CTmpMsgHead?: (Msg.MsgField.IC2cTmpMsgHead|null);

            /** MsgHead GroupInfo */
            GroupInfo?: (Msg.MsgField.IGroupInfo|null);

            /** MsgHead FromAppid */
            FromAppid?: (number|null);

            /** MsgHead FromInstid */
            FromInstid?: (number|null);

            /** MsgHead UserActive */
            UserActive?: (number|null);

            /** MsgHead DiscussInfo */
            DiscussInfo?: (Msg.MsgField.IDiscussInfo|null);

            /** MsgHead FromNick */
            FromNick?: (string|null);

            /** MsgHead AuthUin */
            AuthUin?: (number|Long|null);

            /** MsgHead AuthString */
            AuthString?: (string|null);

            /** MsgHead MsgFlag */
            MsgFlag?: (number|null);

            /** MsgHead AuthRemark */
            AuthRemark?: (string|null);

            /** MsgHead GroupName */
            GroupName?: (Uint8Array|null);

            /** MsgHead MutilTransHead */
            MutilTransHead?: (Msg.MsgField.IMutilTransHead|null);

            /** MsgHead MsgInstCtrl */
            MsgInstCtrl?: (Msg.MsgField.ImMsgHead.IInstCtrl|null);

            /** MsgHead PublicAccountGroupSendFlag */
            PublicAccountGroupSendFlag?: (number|null);

            /** MsgHead WseqInC2cMsghead */
            WseqInC2cMsghead?: (number|null);

            /** MsgHead Cpid */
            Cpid?: (number|Long|null);

            /** MsgHead ExtGroupKeyInfo */
            ExtGroupKeyInfo?: (Msg.MsgField.IExtGroupKeyInfo|null);

            /** MsgHead MultiCompatibleText */
            MultiCompatibleText?: (string|null);

            /** MsgHead AuthSex */
            AuthSex?: (number|null);

            /** MsgHead IsSrcMsg */
            IsSrcMsg?: (boolean|null);
        }

        /** Represents a MsgHead. */
        class MsgHead implements IMsgHead {

            /**
             * Constructs a new MsgHead.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IMsgHead);

            /** MsgHead FromUin. */
            public FromUin: (number|Long);

            /** MsgHead ToUin. */
            public ToUin: (number|Long);

            /** MsgHead MsgType. */
            public MsgType: number;

            /** MsgHead C2cCmd. */
            public C2cCmd: number;

            /** MsgHead MsgSeq. */
            public MsgSeq: number;

            /** MsgHead MsgTime. */
            public MsgTime: number;

            /** MsgHead MsgUid. */
            public MsgUid: (number|Long);

            /** MsgHead C2CTmpMsgHead. */
            public C2CTmpMsgHead?: (Msg.MsgField.IC2cTmpMsgHead|null);

            /** MsgHead GroupInfo. */
            public GroupInfo?: (Msg.MsgField.IGroupInfo|null);

            /** MsgHead FromAppid. */
            public FromAppid: number;

            /** MsgHead FromInstid. */
            public FromInstid: number;

            /** MsgHead UserActive. */
            public UserActive: number;

            /** MsgHead DiscussInfo. */
            public DiscussInfo?: (Msg.MsgField.IDiscussInfo|null);

            /** MsgHead FromNick. */
            public FromNick: string;

            /** MsgHead AuthUin. */
            public AuthUin: (number|Long);

            /** MsgHead AuthString. */
            public AuthString: string;

            /** MsgHead MsgFlag. */
            public MsgFlag: number;

            /** MsgHead AuthRemark. */
            public AuthRemark: string;

            /** MsgHead GroupName. */
            public GroupName: Uint8Array;

            /** MsgHead MutilTransHead. */
            public MutilTransHead?: (Msg.MsgField.IMutilTransHead|null);

            /** MsgHead MsgInstCtrl. */
            public MsgInstCtrl?: (Msg.MsgField.ImMsgHead.IInstCtrl|null);

            /** MsgHead PublicAccountGroupSendFlag. */
            public PublicAccountGroupSendFlag: number;

            /** MsgHead WseqInC2cMsghead. */
            public WseqInC2cMsghead: number;

            /** MsgHead Cpid. */
            public Cpid: (number|Long);

            /** MsgHead ExtGroupKeyInfo. */
            public ExtGroupKeyInfo?: (Msg.MsgField.IExtGroupKeyInfo|null);

            /** MsgHead MultiCompatibleText. */
            public MultiCompatibleText: string;

            /** MsgHead AuthSex. */
            public AuthSex: number;

            /** MsgHead IsSrcMsg. */
            public IsSrcMsg: boolean;

            /**
             * Creates a new MsgHead instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgHead instance
             */
            public static create(properties?: Msg.MsgField.IMsgHead): Msg.MsgField.MsgHead;

            /**
             * Encodes the specified MsgHead message. Does not implicitly {@link Msg.MsgField.MsgHead.verify|verify} messages.
             * @param message MsgHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IMsgHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgHead message, length delimited. Does not implicitly {@link Msg.MsgField.MsgHead.verify|verify} messages.
             * @param message MsgHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IMsgHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgHead message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.MsgHead;

            /**
             * Decodes a MsgHead message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.MsgHead;

            /**
             * Verifies a MsgHead message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgHead message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgHead
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.MsgHead;

            /**
             * Creates a plain object from a MsgHead message. Also converts values to other types if specified.
             * @param message MsgHead
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.MsgHead, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgHead to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContentHead. */
        interface IContentHead {

            /** ContentHead PkgNum */
            PkgNum?: (number|null);

            /** ContentHead PkgIndex */
            PkgIndex?: (number|null);

            /** ContentHead DivSeq */
            DivSeq?: (number|null);

            /** ContentHead AutoReply */
            AutoReply?: (number|null);
        }

        /** Represents a ContentHead. */
        class ContentHead implements IContentHead {

            /**
             * Constructs a new ContentHead.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IContentHead);

            /** ContentHead PkgNum. */
            public PkgNum: number;

            /** ContentHead PkgIndex. */
            public PkgIndex: number;

            /** ContentHead DivSeq. */
            public DivSeq: number;

            /** ContentHead AutoReply. */
            public AutoReply: number;

            /**
             * Creates a new ContentHead instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContentHead instance
             */
            public static create(properties?: Msg.MsgField.IContentHead): Msg.MsgField.ContentHead;

            /**
             * Encodes the specified ContentHead message. Does not implicitly {@link Msg.MsgField.ContentHead.verify|verify} messages.
             * @param message ContentHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IContentHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContentHead message, length delimited. Does not implicitly {@link Msg.MsgField.ContentHead.verify|verify} messages.
             * @param message ContentHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IContentHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContentHead message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContentHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ContentHead;

            /**
             * Decodes a ContentHead message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContentHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ContentHead;

            /**
             * Verifies a ContentHead message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContentHead message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContentHead
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.ContentHead;

            /**
             * Creates a plain object from a ContentHead message. Also converts values to other types if specified.
             * @param message ContentHead
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.ContentHead, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContentHead to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Msg. */
        interface IMsg {

            /** Msg MsgHead */
            MsgHead?: (Msg.MsgField.IMsgHead|null);

            /** Msg ContentHead */
            ContentHead?: (Msg.MsgField.IContentHead|null);

            /** Msg MsgBody */
            MsgBody?: (Msg.MsgField.ImMsgBody.IMsgBody|null);

            /** Msg AppshareInfo */
            AppshareInfo?: (Msg.MsgField.IAppShareInfo|null);
        }

        /** Represents a Msg. */
        class Msg implements IMsg {

            /**
             * Constructs a new Msg.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IMsg);

            /** Msg MsgHead. */
            public MsgHead?: (Msg.MsgField.IMsgHead|null);

            /** Msg ContentHead. */
            public ContentHead?: (Msg.MsgField.IContentHead|null);

            /** Msg MsgBody. */
            public MsgBody?: (Msg.MsgField.ImMsgBody.IMsgBody|null);

            /** Msg AppshareInfo. */
            public AppshareInfo?: (Msg.MsgField.IAppShareInfo|null);

            /**
             * Creates a new Msg instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Msg instance
             */
            public static create(properties?: Msg.MsgField.IMsg): Msg.MsgField.Msg;

            /**
             * Encodes the specified Msg message. Does not implicitly {@link Msg.MsgField.Msg.verify|verify} messages.
             * @param message Msg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Msg message, length delimited. Does not implicitly {@link Msg.MsgField.Msg.verify|verify} messages.
             * @param message Msg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Msg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Msg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.Msg;

            /**
             * Decodes a Msg message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Msg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.Msg;

            /**
             * Verifies a Msg message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Msg message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Msg
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.Msg;

            /**
             * Creates a plain object from a Msg message. Also converts values to other types if specified.
             * @param message Msg
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Msg to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UinPairMsg. */
        interface IUinPairMsg {

            /** UinPairMsg LastReadTime */
            LastReadTime?: (number|null);

            /** UinPairMsg PeerUin */
            PeerUin?: (number|Long|null);

            /** UinPairMsg MsgCompleted */
            MsgCompleted?: (number|null);

            /** UinPairMsg MsgList */
            MsgList?: (Msg.MsgField.IMsg[]|null);

            /** UinPairMsg UnreadMsgNum */
            UnreadMsgNum?: (number|null);

            /** UinPairMsg C2cType */
            C2cType?: (number|null);

            /** UinPairMsg serviceType */
            serviceType?: (number|null);

            /** UinPairMsg PbReserve */
            PbReserve?: (Uint8Array|null);
        }

        /** Represents an UinPairMsg. */
        class UinPairMsg implements IUinPairMsg {

            /**
             * Constructs a new UinPairMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IUinPairMsg);

            /** UinPairMsg LastReadTime. */
            public LastReadTime: number;

            /** UinPairMsg PeerUin. */
            public PeerUin: (number|Long);

            /** UinPairMsg MsgCompleted. */
            public MsgCompleted: number;

            /** UinPairMsg MsgList. */
            public MsgList: Msg.MsgField.IMsg[];

            /** UinPairMsg UnreadMsgNum. */
            public UnreadMsgNum: number;

            /** UinPairMsg C2cType. */
            public C2cType: number;

            /** UinPairMsg serviceType. */
            public serviceType: number;

            /** UinPairMsg PbReserve. */
            public PbReserve: Uint8Array;

            /**
             * Creates a new UinPairMsg instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UinPairMsg instance
             */
            public static create(properties?: Msg.MsgField.IUinPairMsg): Msg.MsgField.UinPairMsg;

            /**
             * Encodes the specified UinPairMsg message. Does not implicitly {@link Msg.MsgField.UinPairMsg.verify|verify} messages.
             * @param message UinPairMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IUinPairMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UinPairMsg message, length delimited. Does not implicitly {@link Msg.MsgField.UinPairMsg.verify|verify} messages.
             * @param message UinPairMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IUinPairMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UinPairMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UinPairMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.UinPairMsg;

            /**
             * Decodes an UinPairMsg message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UinPairMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.UinPairMsg;

            /**
             * Verifies an UinPairMsg message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UinPairMsg message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UinPairMsg
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.UinPairMsg;

            /**
             * Creates a plain object from an UinPairMsg message. Also converts values to other types if specified.
             * @param message UinPairMsg
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.UinPairMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UinPairMsg to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a C2c. */
        interface IC2c {

            /** C2c ToUin */
            ToUin?: (number|Long|null);
        }

        /** Represents a C2c. */
        class C2c implements IC2c {

            /**
             * Constructs a new C2c.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IC2c);

            /** C2c ToUin. */
            public ToUin: (number|Long);

            /**
             * Creates a new C2c instance using the specified properties.
             * @param [properties] Properties to set
             * @returns C2c instance
             */
            public static create(properties?: Msg.MsgField.IC2c): Msg.MsgField.C2c;

            /**
             * Encodes the specified C2c message. Does not implicitly {@link Msg.MsgField.C2c.verify|verify} messages.
             * @param message C2c message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IC2c, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified C2c message, length delimited. Does not implicitly {@link Msg.MsgField.C2c.verify|verify} messages.
             * @param message C2c message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IC2c, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a C2c message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns C2c
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.C2c;

            /**
             * Decodes a C2c message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns C2c
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.C2c;

            /**
             * Verifies a C2c message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a C2c message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns C2c
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.C2c;

            /**
             * Creates a plain object from a C2c message. Also converts values to other types if specified.
             * @param message C2c
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.C2c, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this C2c to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Grp. */
        interface IGrp {

            /** Grp GroupCode */
            GroupCode?: (number|Long|null);
        }

        /** Represents a Grp. */
        class Grp implements IGrp {

            /**
             * Constructs a new Grp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IGrp);

            /** Grp GroupCode. */
            public GroupCode: (number|Long);

            /**
             * Creates a new Grp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Grp instance
             */
            public static create(properties?: Msg.MsgField.IGrp): Msg.MsgField.Grp;

            /**
             * Encodes the specified Grp message. Does not implicitly {@link Msg.MsgField.Grp.verify|verify} messages.
             * @param message Grp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IGrp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Grp message, length delimited. Does not implicitly {@link Msg.MsgField.Grp.verify|verify} messages.
             * @param message Grp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IGrp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Grp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Grp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.Grp;

            /**
             * Decodes a Grp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Grp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.Grp;

            /**
             * Verifies a Grp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Grp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Grp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.Grp;

            /**
             * Creates a plain object from a Grp message. Also converts values to other types if specified.
             * @param message Grp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.Grp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Grp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GrpTmp. */
        interface IGrpTmp {

            /** GrpTmp GroupUin */
            GroupUin?: (number|Long|null);

            /** GrpTmp ToUin */
            ToUin?: (number|Long|null);
        }

        /** Represents a GrpTmp. */
        class GrpTmp implements IGrpTmp {

            /**
             * Constructs a new GrpTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IGrpTmp);

            /** GrpTmp GroupUin. */
            public GroupUin: (number|Long);

            /** GrpTmp ToUin. */
            public ToUin: (number|Long);

            /**
             * Creates a new GrpTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrpTmp instance
             */
            public static create(properties?: Msg.MsgField.IGrpTmp): Msg.MsgField.GrpTmp;

            /**
             * Encodes the specified GrpTmp message. Does not implicitly {@link Msg.MsgField.GrpTmp.verify|verify} messages.
             * @param message GrpTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IGrpTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrpTmp message, length delimited. Does not implicitly {@link Msg.MsgField.GrpTmp.verify|verify} messages.
             * @param message GrpTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IGrpTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrpTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrpTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.GrpTmp;

            /**
             * Decodes a GrpTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrpTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.GrpTmp;

            /**
             * Verifies a GrpTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrpTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrpTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.GrpTmp;

            /**
             * Creates a plain object from a GrpTmp message. Also converts values to other types if specified.
             * @param message GrpTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.GrpTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrpTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Dis. */
        interface IDis {

            /** Dis DisUin */
            DisUin?: (number|Long|null);
        }

        /** Represents a Dis. */
        class Dis implements IDis {

            /**
             * Constructs a new Dis.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IDis);

            /** Dis DisUin. */
            public DisUin: (number|Long);

            /**
             * Creates a new Dis instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Dis instance
             */
            public static create(properties?: Msg.MsgField.IDis): Msg.MsgField.Dis;

            /**
             * Encodes the specified Dis message. Does not implicitly {@link Msg.MsgField.Dis.verify|verify} messages.
             * @param message Dis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IDis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Dis message, length delimited. Does not implicitly {@link Msg.MsgField.Dis.verify|verify} messages.
             * @param message Dis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IDis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Dis message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Dis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.Dis;

            /**
             * Decodes a Dis message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Dis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.Dis;

            /**
             * Verifies a Dis message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Dis message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Dis
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.Dis;

            /**
             * Creates a plain object from a Dis message. Also converts values to other types if specified.
             * @param message Dis
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.Dis, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Dis to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DisTmp. */
        interface IDisTmp {

            /** DisTmp DisUin */
            DisUin?: (number|Long|null);

            /** DisTmp ToUin */
            ToUin?: (number|Long|null);
        }

        /** Represents a DisTmp. */
        class DisTmp implements IDisTmp {

            /**
             * Constructs a new DisTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IDisTmp);

            /** DisTmp DisUin. */
            public DisUin: (number|Long);

            /** DisTmp ToUin. */
            public ToUin: (number|Long);

            /**
             * Creates a new DisTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DisTmp instance
             */
            public static create(properties?: Msg.MsgField.IDisTmp): Msg.MsgField.DisTmp;

            /**
             * Encodes the specified DisTmp message. Does not implicitly {@link Msg.MsgField.DisTmp.verify|verify} messages.
             * @param message DisTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IDisTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DisTmp message, length delimited. Does not implicitly {@link Msg.MsgField.DisTmp.verify|verify} messages.
             * @param message DisTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IDisTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DisTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DisTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.DisTmp;

            /**
             * Decodes a DisTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DisTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.DisTmp;

            /**
             * Verifies a DisTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DisTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DisTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.DisTmp;

            /**
             * Creates a plain object from a DisTmp message. Also converts values to other types if specified.
             * @param message DisTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.DisTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DisTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WpaTmp. */
        interface IWpaTmp {

            /** WpaTmp ToUin */
            ToUin?: (number|Long|null);

            /** WpaTmp Sig */
            Sig?: (Uint8Array|null);
        }

        /** Represents a WpaTmp. */
        class WpaTmp implements IWpaTmp {

            /**
             * Constructs a new WpaTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IWpaTmp);

            /** WpaTmp ToUin. */
            public ToUin: (number|Long);

            /** WpaTmp Sig. */
            public Sig: Uint8Array;

            /**
             * Creates a new WpaTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WpaTmp instance
             */
            public static create(properties?: Msg.MsgField.IWpaTmp): Msg.MsgField.WpaTmp;

            /**
             * Encodes the specified WpaTmp message. Does not implicitly {@link Msg.MsgField.WpaTmp.verify|verify} messages.
             * @param message WpaTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IWpaTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WpaTmp message, length delimited. Does not implicitly {@link Msg.MsgField.WpaTmp.verify|verify} messages.
             * @param message WpaTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IWpaTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WpaTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WpaTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.WpaTmp;

            /**
             * Decodes a WpaTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WpaTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.WpaTmp;

            /**
             * Verifies a WpaTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WpaTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WpaTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.WpaTmp;

            /**
             * Creates a plain object from a WpaTmp message. Also converts values to other types if specified.
             * @param message WpaTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.WpaTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WpaTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SubMsgType0xc1. */
        interface ISubMsgType0xc1 {
        }

        /** Represents a SubMsgType0xc1. */
        class SubMsgType0xc1 implements ISubMsgType0xc1 {

            /**
             * Constructs a new SubMsgType0xc1.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.ISubMsgType0xc1);

            /**
             * Creates a new SubMsgType0xc1 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubMsgType0xc1 instance
             */
            public static create(properties?: Msg.MsgField.ISubMsgType0xc1): Msg.MsgField.SubMsgType0xc1;

            /**
             * Encodes the specified SubMsgType0xc1 message. Does not implicitly {@link Msg.MsgField.SubMsgType0xc1.verify|verify} messages.
             * @param message SubMsgType0xc1 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.ISubMsgType0xc1, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubMsgType0xc1 message, length delimited. Does not implicitly {@link Msg.MsgField.SubMsgType0xc1.verify|verify} messages.
             * @param message SubMsgType0xc1 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.ISubMsgType0xc1, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubMsgType0xc1 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubMsgType0xc1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.SubMsgType0xc1;

            /**
             * Decodes a SubMsgType0xc1 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubMsgType0xc1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.SubMsgType0xc1;

            /**
             * Verifies a SubMsgType0xc1 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubMsgType0xc1 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubMsgType0xc1
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.SubMsgType0xc1;

            /**
             * Creates a plain object from a SubMsgType0xc1 message. Also converts values to other types if specified.
             * @param message SubMsgType0xc1
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.SubMsgType0xc1, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubMsgType0xc1 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SubMsgType0xc1 {

            /** Properties of a NotOnlineImage. */
            interface INotOnlineImage {

                /** NotOnlineImage Filepath */
                Filepath?: (Uint8Array|null);

                /** NotOnlineImage Filelen */
                Filelen?: (number|null);

                /** NotOnlineImage Downloadpath */
                Downloadpath?: (Uint8Array|null);

                /** NotOnlineImage Oldversendfile */
                Oldversendfile?: (Uint8Array|null);

                /** NotOnlineImage Imgtype */
                Imgtype?: (number|null);

                /** NotOnlineImage Previewsimage */
                Previewsimage?: (Uint8Array|null);

                /** NotOnlineImage Picmd5 */
                Picmd5?: (Uint8Array|null);

                /** NotOnlineImage Picheight */
                Picheight?: (number|null);

                /** NotOnlineImage Picwidth */
                Picwidth?: (number|null);

                /** NotOnlineImage Resid */
                Resid?: (Uint8Array|null);

                /** NotOnlineImage Flag */
                Flag?: (Uint8Array|null);

                /** NotOnlineImage Downloadurl */
                Downloadurl?: (string|null);

                /** NotOnlineImage Original */
                Original?: (number|null);
            }

            /** Represents a NotOnlineImage. */
            class NotOnlineImage implements INotOnlineImage {

                /**
                 * Constructs a new NotOnlineImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.SubMsgType0xc1.INotOnlineImage);

                /** NotOnlineImage Filepath. */
                public Filepath: Uint8Array;

                /** NotOnlineImage Filelen. */
                public Filelen: number;

                /** NotOnlineImage Downloadpath. */
                public Downloadpath: Uint8Array;

                /** NotOnlineImage Oldversendfile. */
                public Oldversendfile: Uint8Array;

                /** NotOnlineImage Imgtype. */
                public Imgtype: number;

                /** NotOnlineImage Previewsimage. */
                public Previewsimage: Uint8Array;

                /** NotOnlineImage Picmd5. */
                public Picmd5: Uint8Array;

                /** NotOnlineImage Picheight. */
                public Picheight: number;

                /** NotOnlineImage Picwidth. */
                public Picwidth: number;

                /** NotOnlineImage Resid. */
                public Resid: Uint8Array;

                /** NotOnlineImage Flag. */
                public Flag: Uint8Array;

                /** NotOnlineImage Downloadurl. */
                public Downloadurl: string;

                /** NotOnlineImage Original. */
                public Original: number;

                /**
                 * Creates a new NotOnlineImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotOnlineImage instance
                 */
                public static create(properties?: Msg.MsgField.SubMsgType0xc1.INotOnlineImage): Msg.MsgField.SubMsgType0xc1.NotOnlineImage;

                /**
                 * Encodes the specified NotOnlineImage message. Does not implicitly {@link Msg.MsgField.SubMsgType0xc1.NotOnlineImage.verify|verify} messages.
                 * @param message NotOnlineImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.SubMsgType0xc1.INotOnlineImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotOnlineImage message, length delimited. Does not implicitly {@link Msg.MsgField.SubMsgType0xc1.NotOnlineImage.verify|verify} messages.
                 * @param message NotOnlineImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.SubMsgType0xc1.INotOnlineImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotOnlineImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotOnlineImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.SubMsgType0xc1.NotOnlineImage;

                /**
                 * Decodes a NotOnlineImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotOnlineImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.SubMsgType0xc1.NotOnlineImage;

                /**
                 * Verifies a NotOnlineImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotOnlineImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotOnlineImage
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.SubMsgType0xc1.NotOnlineImage;

                /**
                 * Creates a plain object from a NotOnlineImage message. Also converts values to other types if specified.
                 * @param message NotOnlineImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.SubMsgType0xc1.NotOnlineImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotOnlineImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgBody. */
            interface IMsgBody {

                /** MsgBody Filekey */
                Filekey?: (Uint8Array|null);

                /** MsgBody Fromuin */
                Fromuin?: (number|Long|null);

                /** MsgBody Touin */
                Touin?: (number|Long|null);

                /** MsgBody Status */
                Status?: (number|null);

                /** MsgBody Ttl */
                Ttl?: (number|null);

                /** MsgBody Type */
                Type?: (number|null);

                /** MsgBody Encryptpreheadlength */
                Encryptpreheadlength?: (number|null);

                /** MsgBody Encrypttype */
                Encrypttype?: (number|null);

                /** MsgBody Encryptkey */
                Encryptkey?: (Uint8Array|null);

                /** MsgBody Readtimes */
                Readtimes?: (number|null);

                /** MsgBody Lefttime */
                Lefttime?: (number|null);

                /** MsgBody Notonlineimage */
                Notonlineimage?: (Msg.MsgField.SubMsgType0xc1.INotOnlineImage|null);
            }

            /** Represents a MsgBody. */
            class MsgBody implements IMsgBody {

                /**
                 * Constructs a new MsgBody.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.SubMsgType0xc1.IMsgBody);

                /** MsgBody Filekey. */
                public Filekey: Uint8Array;

                /** MsgBody Fromuin. */
                public Fromuin: (number|Long);

                /** MsgBody Touin. */
                public Touin: (number|Long);

                /** MsgBody Status. */
                public Status: number;

                /** MsgBody Ttl. */
                public Ttl: number;

                /** MsgBody Type. */
                public Type: number;

                /** MsgBody Encryptpreheadlength. */
                public Encryptpreheadlength: number;

                /** MsgBody Encrypttype. */
                public Encrypttype: number;

                /** MsgBody Encryptkey. */
                public Encryptkey: Uint8Array;

                /** MsgBody Readtimes. */
                public Readtimes: number;

                /** MsgBody Lefttime. */
                public Lefttime: number;

                /** MsgBody Notonlineimage. */
                public Notonlineimage?: (Msg.MsgField.SubMsgType0xc1.INotOnlineImage|null);

                /**
                 * Creates a new MsgBody instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgBody instance
                 */
                public static create(properties?: Msg.MsgField.SubMsgType0xc1.IMsgBody): Msg.MsgField.SubMsgType0xc1.MsgBody;

                /**
                 * Encodes the specified MsgBody message. Does not implicitly {@link Msg.MsgField.SubMsgType0xc1.MsgBody.verify|verify} messages.
                 * @param message MsgBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.SubMsgType0xc1.IMsgBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgBody message, length delimited. Does not implicitly {@link Msg.MsgField.SubMsgType0xc1.MsgBody.verify|verify} messages.
                 * @param message MsgBody message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.SubMsgType0xc1.IMsgBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgBody message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.SubMsgType0xc1.MsgBody;

                /**
                 * Decodes a MsgBody message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgBody
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.SubMsgType0xc1.MsgBody;

                /**
                 * Verifies a MsgBody message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgBody message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgBody
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.SubMsgType0xc1.MsgBody;

                /**
                 * Creates a plain object from a MsgBody message. Also converts values to other types if specified.
                 * @param message MsgBody
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.SubMsgType0xc1.MsgBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgBody to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SecretFileHead. */
        interface ISecretFileHead {

            /** SecretFileHead SecretFileMsg */
            SecretFileMsg?: (Msg.MsgField.SubMsgType0xc1.IMsgBody|null);
        }

        /** Represents a SecretFileHead. */
        class SecretFileHead implements ISecretFileHead {

            /**
             * Constructs a new SecretFileHead.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.ISecretFileHead);

            /** SecretFileHead SecretFileMsg. */
            public SecretFileMsg?: (Msg.MsgField.SubMsgType0xc1.IMsgBody|null);

            /**
             * Creates a new SecretFileHead instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SecretFileHead instance
             */
            public static create(properties?: Msg.MsgField.ISecretFileHead): Msg.MsgField.SecretFileHead;

            /**
             * Encodes the specified SecretFileHead message. Does not implicitly {@link Msg.MsgField.SecretFileHead.verify|verify} messages.
             * @param message SecretFileHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.ISecretFileHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SecretFileHead message, length delimited. Does not implicitly {@link Msg.MsgField.SecretFileHead.verify|verify} messages.
             * @param message SecretFileHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.ISecretFileHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SecretFileHead message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SecretFileHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.SecretFileHead;

            /**
             * Decodes a SecretFileHead message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SecretFileHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.SecretFileHead;

            /**
             * Verifies a SecretFileHead message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SecretFileHead message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SecretFileHead
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.SecretFileHead;

            /**
             * Creates a plain object from a SecretFileHead message. Also converts values to other types if specified.
             * @param message SecretFileHead
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.SecretFileHead, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SecretFileHead to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PublicPlat. */
        interface IPublicPlat {

            /** PublicPlat ToUin */
            ToUin?: (number|Long|null);

            /** PublicPlat Sig */
            Sig?: (Uint8Array|null);
        }

        /** Represents a PublicPlat. */
        class PublicPlat implements IPublicPlat {

            /**
             * Constructs a new PublicPlat.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IPublicPlat);

            /** PublicPlat ToUin. */
            public ToUin: (number|Long);

            /** PublicPlat Sig. */
            public Sig: Uint8Array;

            /**
             * Creates a new PublicPlat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PublicPlat instance
             */
            public static create(properties?: Msg.MsgField.IPublicPlat): Msg.MsgField.PublicPlat;

            /**
             * Encodes the specified PublicPlat message. Does not implicitly {@link Msg.MsgField.PublicPlat.verify|verify} messages.
             * @param message PublicPlat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IPublicPlat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PublicPlat message, length delimited. Does not implicitly {@link Msg.MsgField.PublicPlat.verify|verify} messages.
             * @param message PublicPlat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IPublicPlat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PublicPlat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PublicPlat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PublicPlat;

            /**
             * Decodes a PublicPlat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PublicPlat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PublicPlat;

            /**
             * Verifies a PublicPlat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PublicPlat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PublicPlat
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.PublicPlat;

            /**
             * Creates a plain object from a PublicPlat message. Also converts values to other types if specified.
             * @param message PublicPlat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.PublicPlat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PublicPlat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TransMsg. */
        interface ITransMsg {

            /** TransMsg ToUin */
            ToUin?: (number|Long|null);

            /** TransMsg C2cCmd */
            C2cCmd?: (number|null);
        }

        /** Represents a TransMsg. */
        class TransMsg implements ITransMsg {

            /**
             * Constructs a new TransMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.ITransMsg);

            /** TransMsg ToUin. */
            public ToUin: (number|Long);

            /** TransMsg C2cCmd. */
            public C2cCmd: number;

            /**
             * Creates a new TransMsg instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransMsg instance
             */
            public static create(properties?: Msg.MsgField.ITransMsg): Msg.MsgField.TransMsg;

            /**
             * Encodes the specified TransMsg message. Does not implicitly {@link Msg.MsgField.TransMsg.verify|verify} messages.
             * @param message TransMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.ITransMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransMsg message, length delimited. Does not implicitly {@link Msg.MsgField.TransMsg.verify|verify} messages.
             * @param message TransMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.ITransMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.TransMsg;

            /**
             * Decodes a TransMsg message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.TransMsg;

            /**
             * Verifies a TransMsg message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransMsg message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransMsg
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.TransMsg;

            /**
             * Creates a plain object from a TransMsg message. Also converts values to other types if specified.
             * @param message TransMsg
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.TransMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransMsg to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AddressListTmp. */
        interface IAddressListTmp {

            /** AddressListTmp Fromphone */
            Fromphone?: (string|null);

            /** AddressListTmp Tophone */
            Tophone?: (string|null);

            /** AddressListTmp Touin */
            Touin?: (number|Long|null);

            /** AddressListTmp Sig */
            Sig?: (Uint8Array|null);

            /** AddressListTmp Fromcontactsize */
            Fromcontactsize?: (number|null);
        }

        /** Represents an AddressListTmp. */
        class AddressListTmp implements IAddressListTmp {

            /**
             * Constructs a new AddressListTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IAddressListTmp);

            /** AddressListTmp Fromphone. */
            public Fromphone: string;

            /** AddressListTmp Tophone. */
            public Tophone: string;

            /** AddressListTmp Touin. */
            public Touin: (number|Long);

            /** AddressListTmp Sig. */
            public Sig: Uint8Array;

            /** AddressListTmp Fromcontactsize. */
            public Fromcontactsize: number;

            /**
             * Creates a new AddressListTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddressListTmp instance
             */
            public static create(properties?: Msg.MsgField.IAddressListTmp): Msg.MsgField.AddressListTmp;

            /**
             * Encodes the specified AddressListTmp message. Does not implicitly {@link Msg.MsgField.AddressListTmp.verify|verify} messages.
             * @param message AddressListTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IAddressListTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddressListTmp message, length delimited. Does not implicitly {@link Msg.MsgField.AddressListTmp.verify|verify} messages.
             * @param message AddressListTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IAddressListTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddressListTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddressListTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.AddressListTmp;

            /**
             * Decodes an AddressListTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddressListTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.AddressListTmp;

            /**
             * Verifies an AddressListTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddressListTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddressListTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.AddressListTmp;

            /**
             * Creates a plain object from an AddressListTmp message. Also converts values to other types if specified.
             * @param message AddressListTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.AddressListTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddressListTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RichStatusTmp. */
        interface IRichStatusTmp {

            /** RichStatusTmp ToUin */
            ToUin?: (number|Long|null);

            /** RichStatusTmp Sig */
            Sig?: (Uint8Array|null);
        }

        /** Represents a RichStatusTmp. */
        class RichStatusTmp implements IRichStatusTmp {

            /**
             * Constructs a new RichStatusTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IRichStatusTmp);

            /** RichStatusTmp ToUin. */
            public ToUin: (number|Long);

            /** RichStatusTmp Sig. */
            public Sig: Uint8Array;

            /**
             * Creates a new RichStatusTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RichStatusTmp instance
             */
            public static create(properties?: Msg.MsgField.IRichStatusTmp): Msg.MsgField.RichStatusTmp;

            /**
             * Encodes the specified RichStatusTmp message. Does not implicitly {@link Msg.MsgField.RichStatusTmp.verify|verify} messages.
             * @param message RichStatusTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IRichStatusTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RichStatusTmp message, length delimited. Does not implicitly {@link Msg.MsgField.RichStatusTmp.verify|verify} messages.
             * @param message RichStatusTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IRichStatusTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RichStatusTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RichStatusTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.RichStatusTmp;

            /**
             * Decodes a RichStatusTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RichStatusTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.RichStatusTmp;

            /**
             * Verifies a RichStatusTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RichStatusTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RichStatusTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.RichStatusTmp;

            /**
             * Creates a plain object from a RichStatusTmp message. Also converts values to other types if specified.
             * @param message RichStatusTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.RichStatusTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RichStatusTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TransCmd. */
        interface ITransCmd {

            /** TransCmd ToUin */
            ToUin?: (number|Long|null);

            /** TransCmd MsgType */
            MsgType?: (number|null);
        }

        /** Represents a TransCmd. */
        class TransCmd implements ITransCmd {

            /**
             * Constructs a new TransCmd.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.ITransCmd);

            /** TransCmd ToUin. */
            public ToUin: (number|Long);

            /** TransCmd MsgType. */
            public MsgType: number;

            /**
             * Creates a new TransCmd instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransCmd instance
             */
            public static create(properties?: Msg.MsgField.ITransCmd): Msg.MsgField.TransCmd;

            /**
             * Encodes the specified TransCmd message. Does not implicitly {@link Msg.MsgField.TransCmd.verify|verify} messages.
             * @param message TransCmd message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.ITransCmd, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransCmd message, length delimited. Does not implicitly {@link Msg.MsgField.TransCmd.verify|verify} messages.
             * @param message TransCmd message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.ITransCmd, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransCmd message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransCmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.TransCmd;

            /**
             * Decodes a TransCmd message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransCmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.TransCmd;

            /**
             * Verifies a TransCmd message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransCmd message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransCmd
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.TransCmd;

            /**
             * Creates a plain object from a TransCmd message. Also converts values to other types if specified.
             * @param message TransCmd
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.TransCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransCmd to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AccostTmp. */
        interface IAccostTmp {

            /** AccostTmp ToUin */
            ToUin?: (number|Long|null);

            /** AccostTmp Sig */
            Sig?: (Uint8Array|null);

            /** AccostTmp Reply */
            Reply?: (boolean|null);
        }

        /** Represents an AccostTmp. */
        class AccostTmp implements IAccostTmp {

            /**
             * Constructs a new AccostTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IAccostTmp);

            /** AccostTmp ToUin. */
            public ToUin: (number|Long);

            /** AccostTmp Sig. */
            public Sig: Uint8Array;

            /** AccostTmp Reply. */
            public Reply: boolean;

            /**
             * Creates a new AccostTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AccostTmp instance
             */
            public static create(properties?: Msg.MsgField.IAccostTmp): Msg.MsgField.AccostTmp;

            /**
             * Encodes the specified AccostTmp message. Does not implicitly {@link Msg.MsgField.AccostTmp.verify|verify} messages.
             * @param message AccostTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IAccostTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AccostTmp message, length delimited. Does not implicitly {@link Msg.MsgField.AccostTmp.verify|verify} messages.
             * @param message AccostTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IAccostTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AccostTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AccostTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.AccostTmp;

            /**
             * Decodes an AccostTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AccostTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.AccostTmp;

            /**
             * Verifies an AccostTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AccostTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AccostTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.AccostTmp;

            /**
             * Creates a plain object from an AccostTmp message. Also converts values to other types if specified.
             * @param message AccostTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.AccostTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AccostTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PubGroupTmp. */
        interface IPubGroupTmp {

            /** PubGroupTmp ToUin */
            ToUin?: (number|Long|null);

            /** PubGroupTmp Sig */
            Sig?: (Uint8Array|null);

            /** PubGroupTmp GroupUin */
            GroupUin?: (number|Long|null);
        }

        /** Represents a PubGroupTmp. */
        class PubGroupTmp implements IPubGroupTmp {

            /**
             * Constructs a new PubGroupTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IPubGroupTmp);

            /** PubGroupTmp ToUin. */
            public ToUin: (number|Long);

            /** PubGroupTmp Sig. */
            public Sig: Uint8Array;

            /** PubGroupTmp GroupUin. */
            public GroupUin: (number|Long);

            /**
             * Creates a new PubGroupTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PubGroupTmp instance
             */
            public static create(properties?: Msg.MsgField.IPubGroupTmp): Msg.MsgField.PubGroupTmp;

            /**
             * Encodes the specified PubGroupTmp message. Does not implicitly {@link Msg.MsgField.PubGroupTmp.verify|verify} messages.
             * @param message PubGroupTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IPubGroupTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PubGroupTmp message, length delimited. Does not implicitly {@link Msg.MsgField.PubGroupTmp.verify|verify} messages.
             * @param message PubGroupTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IPubGroupTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PubGroupTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PubGroupTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PubGroupTmp;

            /**
             * Decodes a PubGroupTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PubGroupTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PubGroupTmp;

            /**
             * Verifies a PubGroupTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PubGroupTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PubGroupTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.PubGroupTmp;

            /**
             * Creates a plain object from a PubGroupTmp message. Also converts values to other types if specified.
             * @param message PubGroupTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.PubGroupTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PubGroupTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Trans0x211. */
        interface ITrans0x211 {

            /** Trans0x211 Touin */
            Touin?: (number|Long|null);

            /** Trans0x211 CcCmd */
            CcCmd?: (number|null);

            /** Trans0x211 Instctrl */
            Instctrl?: (Msg.MsgField.ImMsgHead.IInstCtrl|null);

            /** Trans0x211 Sig */
            Sig?: (Uint8Array|null);

            /** Trans0x211 C2cType */
            C2cType?: (number|null);

            /** Trans0x211 ServiceType */
            ServiceType?: (number|null);
        }

        /** Represents a Trans0x211. */
        class Trans0x211 implements ITrans0x211 {

            /**
             * Constructs a new Trans0x211.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.ITrans0x211);

            /** Trans0x211 Touin. */
            public Touin: (number|Long);

            /** Trans0x211 CcCmd. */
            public CcCmd: number;

            /** Trans0x211 Instctrl. */
            public Instctrl?: (Msg.MsgField.ImMsgHead.IInstCtrl|null);

            /** Trans0x211 Sig. */
            public Sig: Uint8Array;

            /** Trans0x211 C2cType. */
            public C2cType: number;

            /** Trans0x211 ServiceType. */
            public ServiceType: number;

            /**
             * Creates a new Trans0x211 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Trans0x211 instance
             */
            public static create(properties?: Msg.MsgField.ITrans0x211): Msg.MsgField.Trans0x211;

            /**
             * Encodes the specified Trans0x211 message. Does not implicitly {@link Msg.MsgField.Trans0x211.verify|verify} messages.
             * @param message Trans0x211 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.ITrans0x211, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Trans0x211 message, length delimited. Does not implicitly {@link Msg.MsgField.Trans0x211.verify|verify} messages.
             * @param message Trans0x211 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.ITrans0x211, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Trans0x211 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Trans0x211
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.Trans0x211;

            /**
             * Decodes a Trans0x211 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Trans0x211
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.Trans0x211;

            /**
             * Verifies a Trans0x211 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Trans0x211 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Trans0x211
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.Trans0x211;

            /**
             * Creates a plain object from a Trans0x211 message. Also converts values to other types if specified.
             * @param message Trans0x211
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.Trans0x211, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Trans0x211 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BusinessWPATmp. */
        interface IBusinessWPATmp {

            /** BusinessWPATmp Touin */
            Touin?: (number|Long|null);

            /** BusinessWPATmp Sig */
            Sig?: (Uint8Array|null);

            /** BusinessWPATmp Sigt */
            Sigt?: (Uint8Array|null);
        }

        /** Represents a BusinessWPATmp. */
        class BusinessWPATmp implements IBusinessWPATmp {

            /**
             * Constructs a new BusinessWPATmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IBusinessWPATmp);

            /** BusinessWPATmp Touin. */
            public Touin: (number|Long);

            /** BusinessWPATmp Sig. */
            public Sig: Uint8Array;

            /** BusinessWPATmp Sigt. */
            public Sigt: Uint8Array;

            /**
             * Creates a new BusinessWPATmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessWPATmp instance
             */
            public static create(properties?: Msg.MsgField.IBusinessWPATmp): Msg.MsgField.BusinessWPATmp;

            /**
             * Encodes the specified BusinessWPATmp message. Does not implicitly {@link Msg.MsgField.BusinessWPATmp.verify|verify} messages.
             * @param message BusinessWPATmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IBusinessWPATmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessWPATmp message, length delimited. Does not implicitly {@link Msg.MsgField.BusinessWPATmp.verify|verify} messages.
             * @param message BusinessWPATmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IBusinessWPATmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessWPATmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BusinessWPATmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.BusinessWPATmp;

            /**
             * Decodes a BusinessWPATmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BusinessWPATmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.BusinessWPATmp;

            /**
             * Verifies a BusinessWPATmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessWPATmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessWPATmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.BusinessWPATmp;

            /**
             * Creates a plain object from a BusinessWPATmp message. Also converts values to other types if specified.
             * @param message BusinessWPATmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.BusinessWPATmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessWPATmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AuthTmp. */
        interface IAuthTmp {

            /** AuthTmp ToUin */
            ToUin?: (number|Long|null);

            /** AuthTmp Sig */
            Sig?: (Uint8Array|null);
        }

        /** Represents an AuthTmp. */
        class AuthTmp implements IAuthTmp {

            /**
             * Constructs a new AuthTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IAuthTmp);

            /** AuthTmp ToUin. */
            public ToUin: (number|Long);

            /** AuthTmp Sig. */
            public Sig: Uint8Array;

            /**
             * Creates a new AuthTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthTmp instance
             */
            public static create(properties?: Msg.MsgField.IAuthTmp): Msg.MsgField.AuthTmp;

            /**
             * Encodes the specified AuthTmp message. Does not implicitly {@link Msg.MsgField.AuthTmp.verify|verify} messages.
             * @param message AuthTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IAuthTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthTmp message, length delimited. Does not implicitly {@link Msg.MsgField.AuthTmp.verify|verify} messages.
             * @param message AuthTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IAuthTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.AuthTmp;

            /**
             * Decodes an AuthTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.AuthTmp;

            /**
             * Verifies an AuthTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.AuthTmp;

            /**
             * Creates a plain object from an AuthTmp message. Also converts values to other types if specified.
             * @param message AuthTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.AuthTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BsnsTmp. */
        interface IBsnsTmp {

            /** BsnsTmp ToUin */
            ToUin?: (number|Long|null);

            /** BsnsTmp Sig */
            Sig?: (Uint8Array|null);
        }

        /** Represents a BsnsTmp. */
        class BsnsTmp implements IBsnsTmp {

            /**
             * Constructs a new BsnsTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IBsnsTmp);

            /** BsnsTmp ToUin. */
            public ToUin: (number|Long);

            /** BsnsTmp Sig. */
            public Sig: Uint8Array;

            /**
             * Creates a new BsnsTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BsnsTmp instance
             */
            public static create(properties?: Msg.MsgField.IBsnsTmp): Msg.MsgField.BsnsTmp;

            /**
             * Encodes the specified BsnsTmp message. Does not implicitly {@link Msg.MsgField.BsnsTmp.verify|verify} messages.
             * @param message BsnsTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IBsnsTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BsnsTmp message, length delimited. Does not implicitly {@link Msg.MsgField.BsnsTmp.verify|verify} messages.
             * @param message BsnsTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IBsnsTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BsnsTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BsnsTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.BsnsTmp;

            /**
             * Decodes a BsnsTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BsnsTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.BsnsTmp;

            /**
             * Verifies a BsnsTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BsnsTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BsnsTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.BsnsTmp;

            /**
             * Creates a plain object from a BsnsTmp message. Also converts values to other types if specified.
             * @param message BsnsTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.BsnsTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BsnsTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QqqueryBusinessTmp. */
        interface IQqqueryBusinessTmp {

            /** QqqueryBusinessTmp ToUin */
            ToUin?: (number|Long|null);

            /** QqqueryBusinessTmp Sig */
            Sig?: (Uint8Array|null);
        }

        /** Represents a QqqueryBusinessTmp. */
        class QqqueryBusinessTmp implements IQqqueryBusinessTmp {

            /**
             * Constructs a new QqqueryBusinessTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IQqqueryBusinessTmp);

            /** QqqueryBusinessTmp ToUin. */
            public ToUin: (number|Long);

            /** QqqueryBusinessTmp Sig. */
            public Sig: Uint8Array;

            /**
             * Creates a new QqqueryBusinessTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QqqueryBusinessTmp instance
             */
            public static create(properties?: Msg.MsgField.IQqqueryBusinessTmp): Msg.MsgField.QqqueryBusinessTmp;

            /**
             * Encodes the specified QqqueryBusinessTmp message. Does not implicitly {@link Msg.MsgField.QqqueryBusinessTmp.verify|verify} messages.
             * @param message QqqueryBusinessTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IQqqueryBusinessTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QqqueryBusinessTmp message, length delimited. Does not implicitly {@link Msg.MsgField.QqqueryBusinessTmp.verify|verify} messages.
             * @param message QqqueryBusinessTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IQqqueryBusinessTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QqqueryBusinessTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QqqueryBusinessTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.QqqueryBusinessTmp;

            /**
             * Decodes a QqqueryBusinessTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QqqueryBusinessTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.QqqueryBusinessTmp;

            /**
             * Verifies a QqqueryBusinessTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QqqueryBusinessTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QqqueryBusinessTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.QqqueryBusinessTmp;

            /**
             * Creates a plain object from a QqqueryBusinessTmp message. Also converts values to other types if specified.
             * @param message QqqueryBusinessTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.QqqueryBusinessTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QqqueryBusinessTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NearbyDatingTmp. */
        interface INearbyDatingTmp {

            /** NearbyDatingTmp ToUin */
            ToUin?: (number|Long|null);

            /** NearbyDatingTmp Sig */
            Sig?: (Uint8Array|null);

            /** NearbyDatingTmp Reply */
            Reply?: (boolean|null);
        }

        /** Represents a NearbyDatingTmp. */
        class NearbyDatingTmp implements INearbyDatingTmp {

            /**
             * Constructs a new NearbyDatingTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.INearbyDatingTmp);

            /** NearbyDatingTmp ToUin. */
            public ToUin: (number|Long);

            /** NearbyDatingTmp Sig. */
            public Sig: Uint8Array;

            /** NearbyDatingTmp Reply. */
            public Reply: boolean;

            /**
             * Creates a new NearbyDatingTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NearbyDatingTmp instance
             */
            public static create(properties?: Msg.MsgField.INearbyDatingTmp): Msg.MsgField.NearbyDatingTmp;

            /**
             * Encodes the specified NearbyDatingTmp message. Does not implicitly {@link Msg.MsgField.NearbyDatingTmp.verify|verify} messages.
             * @param message NearbyDatingTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.INearbyDatingTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NearbyDatingTmp message, length delimited. Does not implicitly {@link Msg.MsgField.NearbyDatingTmp.verify|verify} messages.
             * @param message NearbyDatingTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.INearbyDatingTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NearbyDatingTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NearbyDatingTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.NearbyDatingTmp;

            /**
             * Decodes a NearbyDatingTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NearbyDatingTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.NearbyDatingTmp;

            /**
             * Verifies a NearbyDatingTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NearbyDatingTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NearbyDatingTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.NearbyDatingTmp;

            /**
             * Creates a plain object from a NearbyDatingTmp message. Also converts values to other types if specified.
             * @param message NearbyDatingTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.NearbyDatingTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NearbyDatingTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NearByAssistantTmp. */
        interface INearByAssistantTmp {

            /** NearByAssistantTmp ToUin */
            ToUin?: (number|Long|null);

            /** NearByAssistantTmp Sig */
            Sig?: (Uint8Array|null);

            /** NearByAssistantTmp Reply */
            Reply?: (boolean|null);
        }

        /** Represents a NearByAssistantTmp. */
        class NearByAssistantTmp implements INearByAssistantTmp {

            /**
             * Constructs a new NearByAssistantTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.INearByAssistantTmp);

            /** NearByAssistantTmp ToUin. */
            public ToUin: (number|Long);

            /** NearByAssistantTmp Sig. */
            public Sig: Uint8Array;

            /** NearByAssistantTmp Reply. */
            public Reply: boolean;

            /**
             * Creates a new NearByAssistantTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NearByAssistantTmp instance
             */
            public static create(properties?: Msg.MsgField.INearByAssistantTmp): Msg.MsgField.NearByAssistantTmp;

            /**
             * Encodes the specified NearByAssistantTmp message. Does not implicitly {@link Msg.MsgField.NearByAssistantTmp.verify|verify} messages.
             * @param message NearByAssistantTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.INearByAssistantTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NearByAssistantTmp message, length delimited. Does not implicitly {@link Msg.MsgField.NearByAssistantTmp.verify|verify} messages.
             * @param message NearByAssistantTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.INearByAssistantTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NearByAssistantTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NearByAssistantTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.NearByAssistantTmp;

            /**
             * Decodes a NearByAssistantTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NearByAssistantTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.NearByAssistantTmp;

            /**
             * Verifies a NearByAssistantTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NearByAssistantTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NearByAssistantTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.NearByAssistantTmp;

            /**
             * Creates a plain object from a NearByAssistantTmp message. Also converts values to other types if specified.
             * @param message NearByAssistantTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.NearByAssistantTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NearByAssistantTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CommTmp. */
        interface ICommTmp {

            /** CommTmp Touin */
            Touin?: (number|Long|null);

            /** CommTmp C2ctype */
            C2ctype?: (number|null);

            /** CommTmp Svrtype */
            Svrtype?: (number|null);

            /** CommTmp Sig */
            Sig?: (Uint8Array|null);

            /** CommTmp Reserved */
            Reserved?: (Uint8Array|null);
        }

        /** Represents a CommTmp. */
        class CommTmp implements ICommTmp {

            /**
             * Constructs a new CommTmp.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.ICommTmp);

            /** CommTmp Touin. */
            public Touin: (number|Long);

            /** CommTmp C2ctype. */
            public C2ctype: number;

            /** CommTmp Svrtype. */
            public Svrtype: number;

            /** CommTmp Sig. */
            public Sig: Uint8Array;

            /** CommTmp Reserved. */
            public Reserved: Uint8Array;

            /**
             * Creates a new CommTmp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommTmp instance
             */
            public static create(properties?: Msg.MsgField.ICommTmp): Msg.MsgField.CommTmp;

            /**
             * Encodes the specified CommTmp message. Does not implicitly {@link Msg.MsgField.CommTmp.verify|verify} messages.
             * @param message CommTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.ICommTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommTmp message, length delimited. Does not implicitly {@link Msg.MsgField.CommTmp.verify|verify} messages.
             * @param message CommTmp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.ICommTmp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommTmp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.CommTmp;

            /**
             * Decodes a CommTmp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommTmp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.CommTmp;

            /**
             * Verifies a CommTmp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommTmp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommTmp
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.CommTmp;

            /**
             * Creates a plain object from a CommTmp message. Also converts values to other types if specified.
             * @param message CommTmp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.CommTmp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommTmp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RoutingHead. */
        interface IRoutingHead {

            /** RoutingHead C2c */
            C2c?: (Msg.MsgField.IC2c|null);

            /** RoutingHead Grp */
            Grp?: (Msg.MsgField.IGrp|null);

            /** RoutingHead GrpTmp */
            GrpTmp?: (Msg.MsgField.IGrpTmp|null);

            /** RoutingHead Dis */
            Dis?: (Msg.MsgField.IDis|null);

            /** RoutingHead DisTmp */
            DisTmp?: (Msg.MsgField.IDisTmp|null);

            /** RoutingHead WpaTmp */
            WpaTmp?: (Msg.MsgField.IWpaTmp|null);

            /** RoutingHead SecretFileHead */
            SecretFileHead?: (Msg.MsgField.ISecretFileHead|null);

            /** RoutingHead PublicPlat */
            PublicPlat?: (Msg.MsgField.IPublicPlat|null);

            /** RoutingHead TransMsg */
            TransMsg?: (Msg.MsgField.ITransMsg|null);

            /** RoutingHead AddressListTmp */
            AddressListTmp?: (Msg.MsgField.IAddressListTmp|null);

            /** RoutingHead RichStatusTmp */
            RichStatusTmp?: (Msg.MsgField.IRichStatusTmp|null);

            /** RoutingHead TransCmd */
            TransCmd?: (Msg.MsgField.ITransCmd|null);

            /** RoutingHead AccostTmp */
            AccostTmp?: (Msg.MsgField.IAccostTmp|null);

            /** RoutingHead PubGroupTmp */
            PubGroupTmp?: (Msg.MsgField.IPubGroupTmp|null);

            /** RoutingHead Trans0x211 */
            Trans0x211?: (Msg.MsgField.ITrans0x211|null);

            /** RoutingHead BusinessWPATmp */
            BusinessWPATmp?: (Msg.MsgField.IBusinessWPATmp|null);

            /** RoutingHead AuthTmp */
            AuthTmp?: (Msg.MsgField.IAuthTmp|null);

            /** RoutingHead BsnsTmp */
            BsnsTmp?: (Msg.MsgField.IBsnsTmp|null);

            /** RoutingHead QqqueryBusinessTmp */
            QqqueryBusinessTmp?: (Msg.MsgField.IQqqueryBusinessTmp|null);

            /** RoutingHead NearbyDatingTmp */
            NearbyDatingTmp?: (Msg.MsgField.INearbyDatingTmp|null);

            /** RoutingHead NearByAssistantTmp */
            NearByAssistantTmp?: (Msg.MsgField.INearByAssistantTmp|null);

            /** RoutingHead CommTmp */
            CommTmp?: (Msg.MsgField.ICommTmp|null);
        }

        /** Represents a RoutingHead. */
        class RoutingHead implements IRoutingHead {

            /**
             * Constructs a new RoutingHead.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IRoutingHead);

            /** RoutingHead C2c. */
            public C2c?: (Msg.MsgField.IC2c|null);

            /** RoutingHead Grp. */
            public Grp?: (Msg.MsgField.IGrp|null);

            /** RoutingHead GrpTmp. */
            public GrpTmp?: (Msg.MsgField.IGrpTmp|null);

            /** RoutingHead Dis. */
            public Dis?: (Msg.MsgField.IDis|null);

            /** RoutingHead DisTmp. */
            public DisTmp?: (Msg.MsgField.IDisTmp|null);

            /** RoutingHead WpaTmp. */
            public WpaTmp?: (Msg.MsgField.IWpaTmp|null);

            /** RoutingHead SecretFileHead. */
            public SecretFileHead?: (Msg.MsgField.ISecretFileHead|null);

            /** RoutingHead PublicPlat. */
            public PublicPlat?: (Msg.MsgField.IPublicPlat|null);

            /** RoutingHead TransMsg. */
            public TransMsg?: (Msg.MsgField.ITransMsg|null);

            /** RoutingHead AddressListTmp. */
            public AddressListTmp?: (Msg.MsgField.IAddressListTmp|null);

            /** RoutingHead RichStatusTmp. */
            public RichStatusTmp?: (Msg.MsgField.IRichStatusTmp|null);

            /** RoutingHead TransCmd. */
            public TransCmd?: (Msg.MsgField.ITransCmd|null);

            /** RoutingHead AccostTmp. */
            public AccostTmp?: (Msg.MsgField.IAccostTmp|null);

            /** RoutingHead PubGroupTmp. */
            public PubGroupTmp?: (Msg.MsgField.IPubGroupTmp|null);

            /** RoutingHead Trans0x211. */
            public Trans0x211?: (Msg.MsgField.ITrans0x211|null);

            /** RoutingHead BusinessWPATmp. */
            public BusinessWPATmp?: (Msg.MsgField.IBusinessWPATmp|null);

            /** RoutingHead AuthTmp. */
            public AuthTmp?: (Msg.MsgField.IAuthTmp|null);

            /** RoutingHead BsnsTmp. */
            public BsnsTmp?: (Msg.MsgField.IBsnsTmp|null);

            /** RoutingHead QqqueryBusinessTmp. */
            public QqqueryBusinessTmp?: (Msg.MsgField.IQqqueryBusinessTmp|null);

            /** RoutingHead NearbyDatingTmp. */
            public NearbyDatingTmp?: (Msg.MsgField.INearbyDatingTmp|null);

            /** RoutingHead NearByAssistantTmp. */
            public NearByAssistantTmp?: (Msg.MsgField.INearByAssistantTmp|null);

            /** RoutingHead CommTmp. */
            public CommTmp?: (Msg.MsgField.ICommTmp|null);

            /**
             * Creates a new RoutingHead instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoutingHead instance
             */
            public static create(properties?: Msg.MsgField.IRoutingHead): Msg.MsgField.RoutingHead;

            /**
             * Encodes the specified RoutingHead message. Does not implicitly {@link Msg.MsgField.RoutingHead.verify|verify} messages.
             * @param message RoutingHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IRoutingHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoutingHead message, length delimited. Does not implicitly {@link Msg.MsgField.RoutingHead.verify|verify} messages.
             * @param message RoutingHead message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IRoutingHead, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoutingHead message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoutingHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.RoutingHead;

            /**
             * Decodes a RoutingHead message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoutingHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.RoutingHead;

            /**
             * Verifies a RoutingHead message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoutingHead message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoutingHead
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.RoutingHead;

            /**
             * Creates a plain object from a RoutingHead message. Also converts values to other types if specified.
             * @param message RoutingHead
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.RoutingHead, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoutingHead to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MultiMsgAssist. */
        interface IMultiMsgAssist {

            /** MultiMsgAssist Repeatedrouting */
            Repeatedrouting?: (Msg.MsgField.IRoutingHead[]|null);

            /** MultiMsgAssist MsgUse */
            MsgUse?: (number|null);

            /** MultiMsgAssist TempId */
            TempId?: (number|Long|null);

            /** MultiMsgAssist VedioLen */
            VedioLen?: (number|Long|null);

            /** MultiMsgAssist RedBagid */
            RedBagid?: (Uint8Array|null);

            /** MultiMsgAssist RedBagamount */
            RedBagamount?: (number|Long|null);

            /** MultiMsgAssist HasReadbag */
            HasReadbag?: (number|null);

            /** MultiMsgAssist HasVedio */
            HasVedio?: (number|null);
        }

        /** Represents a MultiMsgAssist. */
        class MultiMsgAssist implements IMultiMsgAssist {

            /**
             * Constructs a new MultiMsgAssist.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IMultiMsgAssist);

            /** MultiMsgAssist Repeatedrouting. */
            public Repeatedrouting: Msg.MsgField.IRoutingHead[];

            /** MultiMsgAssist MsgUse. */
            public MsgUse: number;

            /** MultiMsgAssist TempId. */
            public TempId: (number|Long);

            /** MultiMsgAssist VedioLen. */
            public VedioLen: (number|Long);

            /** MultiMsgAssist RedBagid. */
            public RedBagid: Uint8Array;

            /** MultiMsgAssist RedBagamount. */
            public RedBagamount: (number|Long);

            /** MultiMsgAssist HasReadbag. */
            public HasReadbag: number;

            /** MultiMsgAssist HasVedio. */
            public HasVedio: number;

            /**
             * Creates a new MultiMsgAssist instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MultiMsgAssist instance
             */
            public static create(properties?: Msg.MsgField.IMultiMsgAssist): Msg.MsgField.MultiMsgAssist;

            /**
             * Encodes the specified MultiMsgAssist message. Does not implicitly {@link Msg.MsgField.MultiMsgAssist.verify|verify} messages.
             * @param message MultiMsgAssist message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IMultiMsgAssist, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MultiMsgAssist message, length delimited. Does not implicitly {@link Msg.MsgField.MultiMsgAssist.verify|verify} messages.
             * @param message MultiMsgAssist message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IMultiMsgAssist, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MultiMsgAssist message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MultiMsgAssist
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.MultiMsgAssist;

            /**
             * Decodes a MultiMsgAssist message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MultiMsgAssist
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.MultiMsgAssist;

            /**
             * Verifies a MultiMsgAssist message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MultiMsgAssist message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MultiMsgAssist
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.MultiMsgAssist;

            /**
             * Creates a plain object from a MultiMsgAssist message. Also converts values to other types if specified.
             * @param message MultiMsgAssist
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.MultiMsgAssist, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MultiMsgAssist to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PbInputNotifyInfo. */
        interface IPbInputNotifyInfo {

            /** PbInputNotifyInfo Touin */
            Touin?: (number|Long|null);

            /** PbInputNotifyInfo Ime */
            Ime?: (number|null);

            /** PbInputNotifyInfo Notifyflag */
            Notifyflag?: (number|null);

            /** PbInputNotifyInfo Pbreserve */
            Pbreserve?: (Uint8Array|null);

            /** PbInputNotifyInfo Iospushwording */
            Iospushwording?: (Uint8Array|null);
        }

        /** Represents a PbInputNotifyInfo. */
        class PbInputNotifyInfo implements IPbInputNotifyInfo {

            /**
             * Constructs a new PbInputNotifyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IPbInputNotifyInfo);

            /** PbInputNotifyInfo Touin. */
            public Touin: (number|Long);

            /** PbInputNotifyInfo Ime. */
            public Ime: number;

            /** PbInputNotifyInfo Notifyflag. */
            public Notifyflag: number;

            /** PbInputNotifyInfo Pbreserve. */
            public Pbreserve: Uint8Array;

            /** PbInputNotifyInfo Iospushwording. */
            public Iospushwording: Uint8Array;

            /**
             * Creates a new PbInputNotifyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PbInputNotifyInfo instance
             */
            public static create(properties?: Msg.MsgField.IPbInputNotifyInfo): Msg.MsgField.PbInputNotifyInfo;

            /**
             * Encodes the specified PbInputNotifyInfo message. Does not implicitly {@link Msg.MsgField.PbInputNotifyInfo.verify|verify} messages.
             * @param message PbInputNotifyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IPbInputNotifyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PbInputNotifyInfo message, length delimited. Does not implicitly {@link Msg.MsgField.PbInputNotifyInfo.verify|verify} messages.
             * @param message PbInputNotifyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IPbInputNotifyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PbInputNotifyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PbInputNotifyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PbInputNotifyInfo;

            /**
             * Decodes a PbInputNotifyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PbInputNotifyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PbInputNotifyInfo;

            /**
             * Verifies a PbInputNotifyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PbInputNotifyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PbInputNotifyInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.PbInputNotifyInfo;

            /**
             * Creates a plain object from a PbInputNotifyInfo message. Also converts values to other types if specified.
             * @param message PbInputNotifyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.PbInputNotifyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PbInputNotifyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResvResvInfo. */
        interface IResvResvInfo {

            /** ResvResvInfo Flag */
            Flag?: (number|null);

            /** ResvResvInfo Reserv1 */
            Reserv1?: (Uint8Array|null);

            /** ResvResvInfo Reserv2 */
            Reserv2?: (number|Long|null);

            /** ResvResvInfo Reserv3 */
            Reserv3?: (number|Long|null);

            /** ResvResvInfo Createtime */
            Createtime?: (number|null);

            /** ResvResvInfo Picheight */
            Picheight?: (number|null);

            /** ResvResvInfo Picwidth */
            Picwidth?: (number|null);

            /** ResvResvInfo Resvflag */
            Resvflag?: (number|null);
        }

        /** Represents a ResvResvInfo. */
        class ResvResvInfo implements IResvResvInfo {

            /**
             * Constructs a new ResvResvInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IResvResvInfo);

            /** ResvResvInfo Flag. */
            public Flag: number;

            /** ResvResvInfo Reserv1. */
            public Reserv1: Uint8Array;

            /** ResvResvInfo Reserv2. */
            public Reserv2: (number|Long);

            /** ResvResvInfo Reserv3. */
            public Reserv3: (number|Long);

            /** ResvResvInfo Createtime. */
            public Createtime: number;

            /** ResvResvInfo Picheight. */
            public Picheight: number;

            /** ResvResvInfo Picwidth. */
            public Picwidth: number;

            /** ResvResvInfo Resvflag. */
            public Resvflag: number;

            /**
             * Creates a new ResvResvInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResvResvInfo instance
             */
            public static create(properties?: Msg.MsgField.IResvResvInfo): Msg.MsgField.ResvResvInfo;

            /**
             * Encodes the specified ResvResvInfo message. Does not implicitly {@link Msg.MsgField.ResvResvInfo.verify|verify} messages.
             * @param message ResvResvInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IResvResvInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResvResvInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ResvResvInfo.verify|verify} messages.
             * @param message ResvResvInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IResvResvInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResvResvInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResvResvInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ResvResvInfo;

            /**
             * Decodes a ResvResvInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResvResvInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ResvResvInfo;

            /**
             * Verifies a ResvResvInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResvResvInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResvResvInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.ResvResvInfo;

            /**
             * Creates a plain object from a ResvResvInfo message. Also converts values to other types if specified.
             * @param message ResvResvInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.ResvResvInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResvResvInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCtrl. */
        interface IMsgCtrl {

            /** MsgCtrl MsgFlag */
            MsgFlag?: (number|null);

            /** MsgCtrl ResvResvInfo */
            ResvResvInfo?: (Msg.MsgField.IResvResvInfo|null);
        }

        /** Represents a MsgCtrl. */
        class MsgCtrl implements IMsgCtrl {

            /**
             * Constructs a new MsgCtrl.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IMsgCtrl);

            /** MsgCtrl MsgFlag. */
            public MsgFlag: number;

            /** MsgCtrl ResvResvInfo. */
            public ResvResvInfo?: (Msg.MsgField.IResvResvInfo|null);

            /**
             * Creates a new MsgCtrl instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgCtrl instance
             */
            public static create(properties?: Msg.MsgField.IMsgCtrl): Msg.MsgField.MsgCtrl;

            /**
             * Encodes the specified MsgCtrl message. Does not implicitly {@link Msg.MsgField.MsgCtrl.verify|verify} messages.
             * @param message MsgCtrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IMsgCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCtrl message, length delimited. Does not implicitly {@link Msg.MsgField.MsgCtrl.verify|verify} messages.
             * @param message MsgCtrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IMsgCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCtrl message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCtrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.MsgCtrl;

            /**
             * Decodes a MsgCtrl message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCtrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.MsgCtrl;

            /**
             * Verifies a MsgCtrl message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCtrl message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCtrl
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.MsgCtrl;

            /**
             * Creates a plain object from a MsgCtrl message. Also converts values to other types if specified.
             * @param message MsgCtrl
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.MsgCtrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCtrl to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ImReceipt. */
        interface IImReceipt {
        }

        /** Represents an ImReceipt. */
        class ImReceipt implements IImReceipt {

            /**
             * Constructs a new ImReceipt.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IImReceipt);

            /**
             * Creates a new ImReceipt instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImReceipt instance
             */
            public static create(properties?: Msg.MsgField.IImReceipt): Msg.MsgField.ImReceipt;

            /**
             * Encodes the specified ImReceipt message. Does not implicitly {@link Msg.MsgField.ImReceipt.verify|verify} messages.
             * @param message ImReceipt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IImReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImReceipt message, length delimited. Does not implicitly {@link Msg.MsgField.ImReceipt.verify|verify} messages.
             * @param message ImReceipt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IImReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImReceipt message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImReceipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImReceipt;

            /**
             * Decodes an ImReceipt message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImReceipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImReceipt;

            /**
             * Verifies an ImReceipt message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImReceipt message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImReceipt
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImReceipt;

            /**
             * Creates a plain object from an ImReceipt message. Also converts values to other types if specified.
             * @param message ImReceipt
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.ImReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImReceipt to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ImReceipt {

            /** Properties of a MsgInfo. */
            interface IMsgInfo {

                /** MsgInfo FromUin */
                FromUin?: (number|Long|null);

                /** MsgInfo ToUin */
                ToUin?: (number|Long|null);

                /** MsgInfo MsgSeq */
                MsgSeq?: (number|null);

                /** MsgInfo MsgRandom */
                MsgRandom?: (number|null);
            }

            /** Represents a MsgInfo. */
            class MsgInfo implements IMsgInfo {

                /**
                 * Constructs a new MsgInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImReceipt.IMsgInfo);

                /** MsgInfo FromUin. */
                public FromUin: (number|Long);

                /** MsgInfo ToUin. */
                public ToUin: (number|Long);

                /** MsgInfo MsgSeq. */
                public MsgSeq: number;

                /** MsgInfo MsgRandom. */
                public MsgRandom: number;

                /**
                 * Creates a new MsgInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImReceipt.IMsgInfo): Msg.MsgField.ImReceipt.MsgInfo;

                /**
                 * Encodes the specified MsgInfo message. Does not implicitly {@link Msg.MsgField.ImReceipt.MsgInfo.verify|verify} messages.
                 * @param message MsgInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImReceipt.IMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImReceipt.MsgInfo.verify|verify} messages.
                 * @param message MsgInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImReceipt.IMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImReceipt.MsgInfo;

                /**
                 * Decodes a MsgInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImReceipt.MsgInfo;

                /**
                 * Verifies a MsgInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImReceipt.MsgInfo;

                /**
                 * Creates a plain object from a MsgInfo message. Also converts values to other types if specified.
                 * @param message MsgInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImReceipt.MsgInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReceiptReq. */
            interface IReceiptReq {

                /** ReceiptReq Command */
                Command?: (number|null);

                /** ReceiptReq MsgInfo */
                MsgInfo?: (Msg.MsgField.ImReceipt.IMsgInfo|null);
            }

            /** Represents a ReceiptReq. */
            class ReceiptReq implements IReceiptReq {

                /**
                 * Constructs a new ReceiptReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImReceipt.IReceiptReq);

                /** ReceiptReq Command. */
                public Command: number;

                /** ReceiptReq MsgInfo. */
                public MsgInfo?: (Msg.MsgField.ImReceipt.IMsgInfo|null);

                /**
                 * Creates a new ReceiptReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReceiptReq instance
                 */
                public static create(properties?: Msg.MsgField.ImReceipt.IReceiptReq): Msg.MsgField.ImReceipt.ReceiptReq;

                /**
                 * Encodes the specified ReceiptReq message. Does not implicitly {@link Msg.MsgField.ImReceipt.ReceiptReq.verify|verify} messages.
                 * @param message ReceiptReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImReceipt.IReceiptReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReceiptReq message, length delimited. Does not implicitly {@link Msg.MsgField.ImReceipt.ReceiptReq.verify|verify} messages.
                 * @param message ReceiptReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImReceipt.IReceiptReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReceiptReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReceiptReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImReceipt.ReceiptReq;

                /**
                 * Decodes a ReceiptReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReceiptReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImReceipt.ReceiptReq;

                /**
                 * Verifies a ReceiptReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReceiptReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReceiptReq
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImReceipt.ReceiptReq;

                /**
                 * Creates a plain object from a ReceiptReq message. Also converts values to other types if specified.
                 * @param message ReceiptReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImReceipt.ReceiptReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReceiptReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReceiptInfo. */
            interface IReceiptInfo {

                /** ReceiptInfo ReadTime */
                ReadTime?: (number|Long|null);
            }

            /** Represents a ReceiptInfo. */
            class ReceiptInfo implements IReceiptInfo {

                /**
                 * Constructs a new ReceiptInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImReceipt.IReceiptInfo);

                /** ReceiptInfo ReadTime. */
                public ReadTime: (number|Long);

                /**
                 * Creates a new ReceiptInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReceiptInfo instance
                 */
                public static create(properties?: Msg.MsgField.ImReceipt.IReceiptInfo): Msg.MsgField.ImReceipt.ReceiptInfo;

                /**
                 * Encodes the specified ReceiptInfo message. Does not implicitly {@link Msg.MsgField.ImReceipt.ReceiptInfo.verify|verify} messages.
                 * @param message ReceiptInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImReceipt.IReceiptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReceiptInfo message, length delimited. Does not implicitly {@link Msg.MsgField.ImReceipt.ReceiptInfo.verify|verify} messages.
                 * @param message ReceiptInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImReceipt.IReceiptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReceiptInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReceiptInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImReceipt.ReceiptInfo;

                /**
                 * Decodes a ReceiptInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReceiptInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImReceipt.ReceiptInfo;

                /**
                 * Verifies a ReceiptInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReceiptInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReceiptInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImReceipt.ReceiptInfo;

                /**
                 * Creates a plain object from a ReceiptInfo message. Also converts values to other types if specified.
                 * @param message ReceiptInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImReceipt.ReceiptInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReceiptInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReceiptResp. */
            interface IReceiptResp {

                /** ReceiptResp Command */
                Command?: (number|null);

                /** ReceiptResp ReceiptInfo */
                ReceiptInfo?: (Msg.MsgField.ImReceipt.IReceiptInfo|null);
            }

            /** Represents a ReceiptResp. */
            class ReceiptResp implements IReceiptResp {

                /**
                 * Constructs a new ReceiptResp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.ImReceipt.IReceiptResp);

                /** ReceiptResp Command. */
                public Command: number;

                /** ReceiptResp ReceiptInfo. */
                public ReceiptInfo?: (Msg.MsgField.ImReceipt.IReceiptInfo|null);

                /**
                 * Creates a new ReceiptResp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReceiptResp instance
                 */
                public static create(properties?: Msg.MsgField.ImReceipt.IReceiptResp): Msg.MsgField.ImReceipt.ReceiptResp;

                /**
                 * Encodes the specified ReceiptResp message. Does not implicitly {@link Msg.MsgField.ImReceipt.ReceiptResp.verify|verify} messages.
                 * @param message ReceiptResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.ImReceipt.IReceiptResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReceiptResp message, length delimited. Does not implicitly {@link Msg.MsgField.ImReceipt.ReceiptResp.verify|verify} messages.
                 * @param message ReceiptResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.ImReceipt.IReceiptResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReceiptResp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReceiptResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.ImReceipt.ReceiptResp;

                /**
                 * Decodes a ReceiptResp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReceiptResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.ImReceipt.ReceiptResp;

                /**
                 * Verifies a ReceiptResp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReceiptResp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReceiptResp
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.ImReceipt.ReceiptResp;

                /**
                 * Creates a plain object from a ReceiptResp message. Also converts values to other types if specified.
                 * @param message ReceiptResp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.ImReceipt.ReceiptResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReceiptResp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a PbC2CMsgWithDrawReq. */
        interface IPbC2CMsgWithDrawReq {

            /** PbC2CMsgWithDrawReq MsgInfoList */
            MsgInfoList?: (Msg.MsgField.PbC2CMsgWithDrawReq.IMsgInfo[]|null);

            /** PbC2CMsgWithDrawReq LongMessageFlag */
            LongMessageFlag?: (number|null);

            /** PbC2CMsgWithDrawReq Reserved */
            Reserved?: (Uint8Array|null);

            /** PbC2CMsgWithDrawReq SubCmd */
            SubCmd?: (number|null);
        }

        /** Represents a PbC2CMsgWithDrawReq. */
        class PbC2CMsgWithDrawReq implements IPbC2CMsgWithDrawReq {

            /**
             * Constructs a new PbC2CMsgWithDrawReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IPbC2CMsgWithDrawReq);

            /** PbC2CMsgWithDrawReq MsgInfoList. */
            public MsgInfoList: Msg.MsgField.PbC2CMsgWithDrawReq.IMsgInfo[];

            /** PbC2CMsgWithDrawReq LongMessageFlag. */
            public LongMessageFlag: number;

            /** PbC2CMsgWithDrawReq Reserved. */
            public Reserved: Uint8Array;

            /** PbC2CMsgWithDrawReq SubCmd. */
            public SubCmd: number;

            /**
             * Creates a new PbC2CMsgWithDrawReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PbC2CMsgWithDrawReq instance
             */
            public static create(properties?: Msg.MsgField.IPbC2CMsgWithDrawReq): Msg.MsgField.PbC2CMsgWithDrawReq;

            /**
             * Encodes the specified PbC2CMsgWithDrawReq message. Does not implicitly {@link Msg.MsgField.PbC2CMsgWithDrawReq.verify|verify} messages.
             * @param message PbC2CMsgWithDrawReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IPbC2CMsgWithDrawReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PbC2CMsgWithDrawReq message, length delimited. Does not implicitly {@link Msg.MsgField.PbC2CMsgWithDrawReq.verify|verify} messages.
             * @param message PbC2CMsgWithDrawReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IPbC2CMsgWithDrawReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PbC2CMsgWithDrawReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PbC2CMsgWithDrawReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PbC2CMsgWithDrawReq;

            /**
             * Decodes a PbC2CMsgWithDrawReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PbC2CMsgWithDrawReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PbC2CMsgWithDrawReq;

            /**
             * Verifies a PbC2CMsgWithDrawReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PbC2CMsgWithDrawReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PbC2CMsgWithDrawReq
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.PbC2CMsgWithDrawReq;

            /**
             * Creates a plain object from a PbC2CMsgWithDrawReq message. Also converts values to other types if specified.
             * @param message PbC2CMsgWithDrawReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.PbC2CMsgWithDrawReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PbC2CMsgWithDrawReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace PbC2CMsgWithDrawReq {

            /** Properties of a MsgInfo. */
            interface IMsgInfo {

                /** MsgInfo Fromuin */
                Fromuin?: (number|Long|null);

                /** MsgInfo Touin */
                Touin?: (number|Long|null);

                /** MsgInfo Msgseq */
                Msgseq?: (number|null);

                /** MsgInfo Msguid */
                Msguid?: (number|Long|null);

                /** MsgInfo Msgtime */
                Msgtime?: (number|Long|null);

                /** MsgInfo Msgrandom */
                Msgrandom?: (number|null);

                /** MsgInfo Pkgnum */
                Pkgnum?: (number|null);

                /** MsgInfo Pkgindex */
                Pkgindex?: (number|null);

                /** MsgInfo Divseq */
                Divseq?: (number|null);

                /** MsgInfo Msgtype */
                Msgtype?: (number|null);

                /** MsgInfo Routinghead */
                Routinghead?: (Msg.MsgField.IRoutingHead|null);
            }

            /** Represents a MsgInfo. */
            class MsgInfo implements IMsgInfo {

                /**
                 * Constructs a new MsgInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.PbC2CMsgWithDrawReq.IMsgInfo);

                /** MsgInfo Fromuin. */
                public Fromuin: (number|Long);

                /** MsgInfo Touin. */
                public Touin: (number|Long);

                /** MsgInfo Msgseq. */
                public Msgseq: number;

                /** MsgInfo Msguid. */
                public Msguid: (number|Long);

                /** MsgInfo Msgtime. */
                public Msgtime: (number|Long);

                /** MsgInfo Msgrandom. */
                public Msgrandom: number;

                /** MsgInfo Pkgnum. */
                public Pkgnum: number;

                /** MsgInfo Pkgindex. */
                public Pkgindex: number;

                /** MsgInfo Divseq. */
                public Divseq: number;

                /** MsgInfo Msgtype. */
                public Msgtype: number;

                /** MsgInfo Routinghead. */
                public Routinghead?: (Msg.MsgField.IRoutingHead|null);

                /**
                 * Creates a new MsgInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgInfo instance
                 */
                public static create(properties?: Msg.MsgField.PbC2CMsgWithDrawReq.IMsgInfo): Msg.MsgField.PbC2CMsgWithDrawReq.MsgInfo;

                /**
                 * Encodes the specified MsgInfo message. Does not implicitly {@link Msg.MsgField.PbC2CMsgWithDrawReq.MsgInfo.verify|verify} messages.
                 * @param message MsgInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.PbC2CMsgWithDrawReq.IMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgInfo message, length delimited. Does not implicitly {@link Msg.MsgField.PbC2CMsgWithDrawReq.MsgInfo.verify|verify} messages.
                 * @param message MsgInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.PbC2CMsgWithDrawReq.IMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PbC2CMsgWithDrawReq.MsgInfo;

                /**
                 * Decodes a MsgInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PbC2CMsgWithDrawReq.MsgInfo;

                /**
                 * Verifies a MsgInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.PbC2CMsgWithDrawReq.MsgInfo;

                /**
                 * Creates a plain object from a MsgInfo message. Also converts values to other types if specified.
                 * @param message MsgInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.PbC2CMsgWithDrawReq.MsgInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a MsgSendInfo. */
        interface IMsgSendInfo {

            /** MsgSendInfo Receiver */
            Receiver?: (number|null);
        }

        /** Represents a MsgSendInfo. */
        class MsgSendInfo implements IMsgSendInfo {

            /**
             * Constructs a new MsgSendInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IMsgSendInfo);

            /** MsgSendInfo Receiver. */
            public Receiver: number;

            /**
             * Creates a new MsgSendInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSendInfo instance
             */
            public static create(properties?: Msg.MsgField.IMsgSendInfo): Msg.MsgField.MsgSendInfo;

            /**
             * Encodes the specified MsgSendInfo message. Does not implicitly {@link Msg.MsgField.MsgSendInfo.verify|verify} messages.
             * @param message MsgSendInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IMsgSendInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSendInfo message, length delimited. Does not implicitly {@link Msg.MsgField.MsgSendInfo.verify|verify} messages.
             * @param message MsgSendInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IMsgSendInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSendInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSendInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.MsgSendInfo;

            /**
             * Decodes a MsgSendInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSendInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.MsgSendInfo;

            /**
             * Verifies a MsgSendInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSendInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSendInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.MsgSendInfo;

            /**
             * Creates a plain object from a MsgSendInfo message. Also converts values to other types if specified.
             * @param message MsgSendInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.MsgSendInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSendInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TransSvrInfo. */
        interface ITransSvrInfo {

            /** TransSvrInfo SubType */
            SubType?: (number|null);

            /** TransSvrInfo Int32RetCode */
            Int32RetCode?: (number|null);

            /** TransSvrInfo ErrMsg */
            ErrMsg?: (Uint8Array|null);

            /** TransSvrInfo TransInfo */
            TransInfo?: (Uint8Array|null);
        }

        /** Represents a TransSvrInfo. */
        class TransSvrInfo implements ITransSvrInfo {

            /**
             * Constructs a new TransSvrInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.ITransSvrInfo);

            /** TransSvrInfo SubType. */
            public SubType: number;

            /** TransSvrInfo Int32RetCode. */
            public Int32RetCode: number;

            /** TransSvrInfo ErrMsg. */
            public ErrMsg: Uint8Array;

            /** TransSvrInfo TransInfo. */
            public TransInfo: Uint8Array;

            /**
             * Creates a new TransSvrInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransSvrInfo instance
             */
            public static create(properties?: Msg.MsgField.ITransSvrInfo): Msg.MsgField.TransSvrInfo;

            /**
             * Encodes the specified TransSvrInfo message. Does not implicitly {@link Msg.MsgField.TransSvrInfo.verify|verify} messages.
             * @param message TransSvrInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.ITransSvrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransSvrInfo message, length delimited. Does not implicitly {@link Msg.MsgField.TransSvrInfo.verify|verify} messages.
             * @param message TransSvrInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.ITransSvrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransSvrInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransSvrInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.TransSvrInfo;

            /**
             * Decodes a TransSvrInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransSvrInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.TransSvrInfo;

            /**
             * Verifies a TransSvrInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransSvrInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransSvrInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.TransSvrInfo;

            /**
             * Creates a plain object from a TransSvrInfo message. Also converts values to other types if specified.
             * @param message TransSvrInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.TransSvrInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransSvrInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PbGroupMsgWithDrawReq. */
        interface IPbGroupMsgWithDrawReq {

            /** PbGroupMsgWithDrawReq Subcmd */
            Subcmd?: (number|null);

            /** PbGroupMsgWithDrawReq Grouptype */
            Grouptype?: (number|null);

            /** PbGroupMsgWithDrawReq Groupcode */
            Groupcode?: (number|Long|null);

            /** PbGroupMsgWithDrawReq Msglist */
            Msglist?: (Msg.MsgField.PbGroupMsgWithDrawReq.IMessageInfo[]|null);

            /** PbGroupMsgWithDrawReq Userdef */
            Userdef?: (Uint8Array|null);
        }

        /** Represents a PbGroupMsgWithDrawReq. */
        class PbGroupMsgWithDrawReq implements IPbGroupMsgWithDrawReq {

            /**
             * Constructs a new PbGroupMsgWithDrawReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.MsgField.IPbGroupMsgWithDrawReq);

            /** PbGroupMsgWithDrawReq Subcmd. */
            public Subcmd: number;

            /** PbGroupMsgWithDrawReq Grouptype. */
            public Grouptype: number;

            /** PbGroupMsgWithDrawReq Groupcode. */
            public Groupcode: (number|Long);

            /** PbGroupMsgWithDrawReq Msglist. */
            public Msglist: Msg.MsgField.PbGroupMsgWithDrawReq.IMessageInfo[];

            /** PbGroupMsgWithDrawReq Userdef. */
            public Userdef: Uint8Array;

            /**
             * Creates a new PbGroupMsgWithDrawReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PbGroupMsgWithDrawReq instance
             */
            public static create(properties?: Msg.MsgField.IPbGroupMsgWithDrawReq): Msg.MsgField.PbGroupMsgWithDrawReq;

            /**
             * Encodes the specified PbGroupMsgWithDrawReq message. Does not implicitly {@link Msg.MsgField.PbGroupMsgWithDrawReq.verify|verify} messages.
             * @param message PbGroupMsgWithDrawReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.MsgField.IPbGroupMsgWithDrawReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PbGroupMsgWithDrawReq message, length delimited. Does not implicitly {@link Msg.MsgField.PbGroupMsgWithDrawReq.verify|verify} messages.
             * @param message PbGroupMsgWithDrawReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.MsgField.IPbGroupMsgWithDrawReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PbGroupMsgWithDrawReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PbGroupMsgWithDrawReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PbGroupMsgWithDrawReq;

            /**
             * Decodes a PbGroupMsgWithDrawReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PbGroupMsgWithDrawReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PbGroupMsgWithDrawReq;

            /**
             * Verifies a PbGroupMsgWithDrawReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PbGroupMsgWithDrawReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PbGroupMsgWithDrawReq
             */
            public static fromObject(object: { [k: string]: any }): Msg.MsgField.PbGroupMsgWithDrawReq;

            /**
             * Creates a plain object from a PbGroupMsgWithDrawReq message. Also converts values to other types if specified.
             * @param message PbGroupMsgWithDrawReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.MsgField.PbGroupMsgWithDrawReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PbGroupMsgWithDrawReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace PbGroupMsgWithDrawReq {

            /** Properties of a MessageInfo. */
            interface IMessageInfo {

                /** MessageInfo MsgSeq */
                MsgSeq?: (number|null);

                /** MessageInfo MsgRandom */
                MsgRandom?: (number|null);

                /** MessageInfo MsgType */
                MsgType?: (number|null);
            }

            /** Represents a MessageInfo. */
            class MessageInfo implements IMessageInfo {

                /**
                 * Constructs a new MessageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Msg.MsgField.PbGroupMsgWithDrawReq.IMessageInfo);

                /** MessageInfo MsgSeq. */
                public MsgSeq: number;

                /** MessageInfo MsgRandom. */
                public MsgRandom: number;

                /** MessageInfo MsgType. */
                public MsgType: number;

                /**
                 * Creates a new MessageInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageInfo instance
                 */
                public static create(properties?: Msg.MsgField.PbGroupMsgWithDrawReq.IMessageInfo): Msg.MsgField.PbGroupMsgWithDrawReq.MessageInfo;

                /**
                 * Encodes the specified MessageInfo message. Does not implicitly {@link Msg.MsgField.PbGroupMsgWithDrawReq.MessageInfo.verify|verify} messages.
                 * @param message MessageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Msg.MsgField.PbGroupMsgWithDrawReq.IMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageInfo message, length delimited. Does not implicitly {@link Msg.MsgField.PbGroupMsgWithDrawReq.MessageInfo.verify|verify} messages.
                 * @param message MessageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Msg.MsgField.PbGroupMsgWithDrawReq.IMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgField.PbGroupMsgWithDrawReq.MessageInfo;

                /**
                 * Decodes a MessageInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgField.PbGroupMsgWithDrawReq.MessageInfo;

                /**
                 * Verifies a MessageInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageInfo
                 */
                public static fromObject(object: { [k: string]: any }): Msg.MsgField.PbGroupMsgWithDrawReq.MessageInfo;

                /**
                 * Creates a plain object from a MessageInfo message. Also converts values to other types if specified.
                 * @param message MessageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Msg.MsgField.PbGroupMsgWithDrawReq.MessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of a PbMsgWithDrawReq. */
    interface IPbMsgWithDrawReq {

        /** PbMsgWithDrawReq ListPbC2CMsgWithDrawReq */
        ListPbC2CMsgWithDrawReq?: (Msg.MsgField.IPbC2CMsgWithDrawReq[]|null);

        /** PbMsgWithDrawReq ListPbGroupMsgWithDrawReq */
        ListPbGroupMsgWithDrawReq?: (Msg.MsgField.IPbGroupMsgWithDrawReq[]|null);
    }

    /** Represents a PbMsgWithDrawReq. */
    class PbMsgWithDrawReq implements IPbMsgWithDrawReq {

        /**
         * Constructs a new PbMsgWithDrawReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbMsgWithDrawReq);

        /** PbMsgWithDrawReq ListPbC2CMsgWithDrawReq. */
        public ListPbC2CMsgWithDrawReq: Msg.MsgField.IPbC2CMsgWithDrawReq[];

        /** PbMsgWithDrawReq ListPbGroupMsgWithDrawReq. */
        public ListPbGroupMsgWithDrawReq: Msg.MsgField.IPbGroupMsgWithDrawReq[];

        /**
         * Creates a new PbMsgWithDrawReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgWithDrawReq instance
         */
        public static create(properties?: Msg.IPbMsgWithDrawReq): Msg.PbMsgWithDrawReq;

        /**
         * Encodes the specified PbMsgWithDrawReq message. Does not implicitly {@link Msg.PbMsgWithDrawReq.verify|verify} messages.
         * @param message PbMsgWithDrawReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbMsgWithDrawReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbMsgWithDrawReq message, length delimited. Does not implicitly {@link Msg.PbMsgWithDrawReq.verify|verify} messages.
         * @param message PbMsgWithDrawReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbMsgWithDrawReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbMsgWithDrawReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgWithDrawReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbMsgWithDrawReq;

        /**
         * Decodes a PbMsgWithDrawReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgWithDrawReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbMsgWithDrawReq;

        /**
         * Verifies a PbMsgWithDrawReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgWithDrawReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgWithDrawReq
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbMsgWithDrawReq;

        /**
         * Creates a plain object from a PbMsgWithDrawReq message. Also converts values to other types if specified.
         * @param message PbMsgWithDrawReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbMsgWithDrawReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgWithDrawReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SyncFlag enum. */
    enum SyncFlag {
        Start = 0,
        Continue = 1,
        Stop = 2
    }

    /** Properties of an OnlinePushTrans. */
    interface IOnlinePushTrans {
    }

    /** Represents an OnlinePushTrans. */
    class OnlinePushTrans implements IOnlinePushTrans {

        /**
         * Constructs a new OnlinePushTrans.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IOnlinePushTrans);

        /**
         * Creates a new OnlinePushTrans instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OnlinePushTrans instance
         */
        public static create(properties?: Msg.IOnlinePushTrans): Msg.OnlinePushTrans;

        /**
         * Encodes the specified OnlinePushTrans message. Does not implicitly {@link Msg.OnlinePushTrans.verify|verify} messages.
         * @param message OnlinePushTrans message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IOnlinePushTrans, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OnlinePushTrans message, length delimited. Does not implicitly {@link Msg.OnlinePushTrans.verify|verify} messages.
         * @param message OnlinePushTrans message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IOnlinePushTrans, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OnlinePushTrans message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OnlinePushTrans
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.OnlinePushTrans;

        /**
         * Decodes an OnlinePushTrans message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OnlinePushTrans
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.OnlinePushTrans;

        /**
         * Verifies an OnlinePushTrans message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OnlinePushTrans message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OnlinePushTrans
         */
        public static fromObject(object: { [k: string]: any }): Msg.OnlinePushTrans;

        /**
         * Creates a plain object from an OnlinePushTrans message. Also converts values to other types if specified.
         * @param message OnlinePushTrans
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.OnlinePushTrans, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OnlinePushTrans to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace OnlinePushTrans {

        /** Properties of an ExtGroupKeyInfo. */
        interface IExtGroupKeyInfo {

            /** ExtGroupKeyInfo CurMaxSeq */
            CurMaxSeq?: (number|null);

            /** ExtGroupKeyInfo CurTime */
            CurTime?: (number|Long|null);
        }

        /** Represents an ExtGroupKeyInfo. */
        class ExtGroupKeyInfo implements IExtGroupKeyInfo {

            /**
             * Constructs a new ExtGroupKeyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.OnlinePushTrans.IExtGroupKeyInfo);

            /** ExtGroupKeyInfo CurMaxSeq. */
            public CurMaxSeq: number;

            /** ExtGroupKeyInfo CurTime. */
            public CurTime: (number|Long);

            /**
             * Creates a new ExtGroupKeyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtGroupKeyInfo instance
             */
            public static create(properties?: Msg.OnlinePushTrans.IExtGroupKeyInfo): Msg.OnlinePushTrans.ExtGroupKeyInfo;

            /**
             * Encodes the specified ExtGroupKeyInfo message. Does not implicitly {@link Msg.OnlinePushTrans.ExtGroupKeyInfo.verify|verify} messages.
             * @param message ExtGroupKeyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.OnlinePushTrans.IExtGroupKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtGroupKeyInfo message, length delimited. Does not implicitly {@link Msg.OnlinePushTrans.ExtGroupKeyInfo.verify|verify} messages.
             * @param message ExtGroupKeyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.OnlinePushTrans.IExtGroupKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtGroupKeyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtGroupKeyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.OnlinePushTrans.ExtGroupKeyInfo;

            /**
             * Decodes an ExtGroupKeyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtGroupKeyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.OnlinePushTrans.ExtGroupKeyInfo;

            /**
             * Verifies an ExtGroupKeyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtGroupKeyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtGroupKeyInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.OnlinePushTrans.ExtGroupKeyInfo;

            /**
             * Creates a plain object from an ExtGroupKeyInfo message. Also converts values to other types if specified.
             * @param message ExtGroupKeyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.OnlinePushTrans.ExtGroupKeyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtGroupKeyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PbMsgInfo. */
        interface IPbMsgInfo {

            /** PbMsgInfo Fromuin */
            Fromuin?: (number|Long|null);

            /** PbMsgInfo Touin */
            Touin?: (number|Long|null);

            /** PbMsgInfo Msgtype */
            Msgtype?: (number|null);

            /** PbMsgInfo Msgsubtype */
            Msgsubtype?: (number|null);

            /** PbMsgInfo Msgseq */
            Msgseq?: (number|null);

            /** PbMsgInfo Msguid */
            Msguid?: (number|Long|null);

            /** PbMsgInfo Msgtime */
            Msgtime?: (number|null);

            /** PbMsgInfo Realmsgtime */
            Realmsgtime?: (number|null);

            /** PbMsgInfo Nickname */
            Nickname?: (string|null);

            /** PbMsgInfo Msgdata */
            Msgdata?: (Uint8Array|null);

            /** PbMsgInfo Svrip */
            Svrip?: (number|null);

            /** PbMsgInfo Extgroupkeyinfo */
            Extgroupkeyinfo?: (Msg.OnlinePushTrans.IExtGroupKeyInfo|null);

            /** PbMsgInfo Generalflag */
            Generalflag?: (number|null);
        }

        /** Represents a PbMsgInfo. */
        class PbMsgInfo implements IPbMsgInfo {

            /**
             * Constructs a new PbMsgInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Msg.OnlinePushTrans.IPbMsgInfo);

            /** PbMsgInfo Fromuin. */
            public Fromuin: (number|Long);

            /** PbMsgInfo Touin. */
            public Touin: (number|Long);

            /** PbMsgInfo Msgtype. */
            public Msgtype: number;

            /** PbMsgInfo Msgsubtype. */
            public Msgsubtype: number;

            /** PbMsgInfo Msgseq. */
            public Msgseq: number;

            /** PbMsgInfo Msguid. */
            public Msguid: (number|Long);

            /** PbMsgInfo Msgtime. */
            public Msgtime: number;

            /** PbMsgInfo Realmsgtime. */
            public Realmsgtime: number;

            /** PbMsgInfo Nickname. */
            public Nickname: string;

            /** PbMsgInfo Msgdata. */
            public Msgdata: Uint8Array;

            /** PbMsgInfo Svrip. */
            public Svrip: number;

            /** PbMsgInfo Extgroupkeyinfo. */
            public Extgroupkeyinfo?: (Msg.OnlinePushTrans.IExtGroupKeyInfo|null);

            /** PbMsgInfo Generalflag. */
            public Generalflag: number;

            /**
             * Creates a new PbMsgInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PbMsgInfo instance
             */
            public static create(properties?: Msg.OnlinePushTrans.IPbMsgInfo): Msg.OnlinePushTrans.PbMsgInfo;

            /**
             * Encodes the specified PbMsgInfo message. Does not implicitly {@link Msg.OnlinePushTrans.PbMsgInfo.verify|verify} messages.
             * @param message PbMsgInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Msg.OnlinePushTrans.IPbMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PbMsgInfo message, length delimited. Does not implicitly {@link Msg.OnlinePushTrans.PbMsgInfo.verify|verify} messages.
             * @param message PbMsgInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Msg.OnlinePushTrans.IPbMsgInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PbMsgInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PbMsgInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.OnlinePushTrans.PbMsgInfo;

            /**
             * Decodes a PbMsgInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PbMsgInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.OnlinePushTrans.PbMsgInfo;

            /**
             * Verifies a PbMsgInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PbMsgInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PbMsgInfo
             */
            public static fromObject(object: { [k: string]: any }): Msg.OnlinePushTrans.PbMsgInfo;

            /**
             * Creates a plain object from a PbMsgInfo message. Also converts values to other types if specified.
             * @param message PbMsgInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Msg.OnlinePushTrans.PbMsgInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PbMsgInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a SyncCookie. */
    interface ISyncCookie {

        /** SyncCookie time1 */
        time1?: (number|Long|null);

        /** SyncCookie time2 */
        time2?: (number|Long|null);

        /** SyncCookie param1 */
        param1?: (number|Long|null);

        /** SyncCookie param2 */
        param2?: (number|Long|null);

        /** SyncCookie param3 */
        param3?: (number|Long|null);

        /** SyncCookie param4 */
        param4?: (number|Long|null);

        /** SyncCookie param5 */
        param5?: (number|Long|null);

        /** SyncCookie LastSyncTime */
        LastSyncTime?: (number|Long|null);

        /** SyncCookie param6 */
        param6?: (number|Long|null);
    }

    /** Represents a SyncCookie. */
    class SyncCookie implements ISyncCookie {

        /**
         * Constructs a new SyncCookie.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ISyncCookie);

        /** SyncCookie time1. */
        public time1: (number|Long);

        /** SyncCookie time2. */
        public time2: (number|Long);

        /** SyncCookie param1. */
        public param1: (number|Long);

        /** SyncCookie param2. */
        public param2: (number|Long);

        /** SyncCookie param3. */
        public param3: (number|Long);

        /** SyncCookie param4. */
        public param4: (number|Long);

        /** SyncCookie param5. */
        public param5: (number|Long);

        /** SyncCookie LastSyncTime. */
        public LastSyncTime: (number|Long);

        /** SyncCookie param6. */
        public param6: (number|Long);

        /**
         * Creates a new SyncCookie instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncCookie instance
         */
        public static create(properties?: Msg.ISyncCookie): Msg.SyncCookie;

        /**
         * Encodes the specified SyncCookie message. Does not implicitly {@link Msg.SyncCookie.verify|verify} messages.
         * @param message SyncCookie message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ISyncCookie, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncCookie message, length delimited. Does not implicitly {@link Msg.SyncCookie.verify|verify} messages.
         * @param message SyncCookie message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ISyncCookie, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncCookie message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.SyncCookie;

        /**
         * Decodes a SyncCookie message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.SyncCookie;

        /**
         * Verifies a SyncCookie message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncCookie message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncCookie
         */
        public static fromObject(object: { [k: string]: any }): Msg.SyncCookie;

        /**
         * Creates a plain object from a SyncCookie message. Also converts values to other types if specified.
         * @param message SyncCookie
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.SyncCookie, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncCookie to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgItem. */
    interface IMsgItem {

        /** MsgItem FromUin */
        FromUin?: (number|Long|null);

        /** MsgItem ToUin */
        ToUin?: (number|Long|null);

        /** MsgItem MsgType */
        MsgType?: (number|null);

        /** MsgItem MsgSeq */
        MsgSeq?: (number|null);

        /** MsgItem MsgUid */
        MsgUid?: (number|Long|null);

        /** MsgItem Sig */
        Sig?: (Uint8Array|null);
    }

    /** Represents a MsgItem. */
    class MsgItem implements IMsgItem {

        /**
         * Constructs a new MsgItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMsgItem);

        /** MsgItem FromUin. */
        public FromUin: (number|Long);

        /** MsgItem ToUin. */
        public ToUin: (number|Long);

        /** MsgItem MsgType. */
        public MsgType: number;

        /** MsgItem MsgSeq. */
        public MsgSeq: number;

        /** MsgItem MsgUid. */
        public MsgUid: (number|Long);

        /** MsgItem Sig. */
        public Sig: Uint8Array;

        /**
         * Creates a new MsgItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgItem instance
         */
        public static create(properties?: Msg.IMsgItem): Msg.MsgItem;

        /**
         * Encodes the specified MsgItem message. Does not implicitly {@link Msg.MsgItem.verify|verify} messages.
         * @param message MsgItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMsgItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgItem message, length delimited. Does not implicitly {@link Msg.MsgItem.verify|verify} messages.
         * @param message MsgItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMsgItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.MsgItem;

        /**
         * Decodes a MsgItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.MsgItem;

        /**
         * Verifies a MsgItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgItem
         */
        public static fromObject(object: { [k: string]: any }): Msg.MsgItem;

        /**
         * Creates a plain object from a MsgItem message. Also converts values to other types if specified.
         * @param message MsgItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.MsgItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbDeleteMsgResp. */
    interface IPbDeleteMsgResp {

        /** PbDeleteMsgResp Result */
        Result?: (number|null);

        /** PbDeleteMsgResp ErrorMsg */
        ErrorMsg?: (string|null);
    }

    /** Represents a PbDeleteMsgResp. */
    class PbDeleteMsgResp implements IPbDeleteMsgResp {

        /**
         * Constructs a new PbDeleteMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbDeleteMsgResp);

        /** PbDeleteMsgResp Result. */
        public Result: number;

        /** PbDeleteMsgResp ErrorMsg. */
        public ErrorMsg: string;

        /**
         * Creates a new PbDeleteMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbDeleteMsgResp instance
         */
        public static create(properties?: Msg.IPbDeleteMsgResp): Msg.PbDeleteMsgResp;

        /**
         * Encodes the specified PbDeleteMsgResp message. Does not implicitly {@link Msg.PbDeleteMsgResp.verify|verify} messages.
         * @param message PbDeleteMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbDeleteMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbDeleteMsgResp message, length delimited. Does not implicitly {@link Msg.PbDeleteMsgResp.verify|verify} messages.
         * @param message PbDeleteMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbDeleteMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbDeleteMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbDeleteMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbDeleteMsgResp;

        /**
         * Decodes a PbDeleteMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbDeleteMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbDeleteMsgResp;

        /**
         * Verifies a PbDeleteMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbDeleteMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbDeleteMsgResp
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbDeleteMsgResp;

        /**
         * Creates a plain object from a PbDeleteMsgResp message. Also converts values to other types if specified.
         * @param message PbDeleteMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbDeleteMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbDeleteMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbDeleteMsgReq. */
    interface IPbDeleteMsgReq {

        /** PbDeleteMsgReq MsgList */
        MsgList?: (Msg.IMsgItem[]|null);
    }

    /** Represents a PbDeleteMsgReq. */
    class PbDeleteMsgReq implements IPbDeleteMsgReq {

        /**
         * Constructs a new PbDeleteMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbDeleteMsgReq);

        /** PbDeleteMsgReq MsgList. */
        public MsgList: Msg.IMsgItem[];

        /**
         * Creates a new PbDeleteMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbDeleteMsgReq instance
         */
        public static create(properties?: Msg.IPbDeleteMsgReq): Msg.PbDeleteMsgReq;

        /**
         * Encodes the specified PbDeleteMsgReq message. Does not implicitly {@link Msg.PbDeleteMsgReq.verify|verify} messages.
         * @param message PbDeleteMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbDeleteMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbDeleteMsgReq message, length delimited. Does not implicitly {@link Msg.PbDeleteMsgReq.verify|verify} messages.
         * @param message PbDeleteMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbDeleteMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbDeleteMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbDeleteMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbDeleteMsgReq;

        /**
         * Decodes a PbDeleteMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbDeleteMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbDeleteMsgReq;

        /**
         * Verifies a PbDeleteMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbDeleteMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbDeleteMsgReq
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbDeleteMsgReq;

        /**
         * Creates a plain object from a PbDeleteMsgReq message. Also converts values to other types if specified.
         * @param message PbDeleteMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbDeleteMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbDeleteMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbPushGroupMsg. */
    interface IPbPushGroupMsg {

        /** PbPushGroupMsg Msg */
        Msg?: (Msg.MsgField.IMsg|null);

        /** PbPushGroupMsg Svrip */
        Svrip?: (number|null);

        /** PbPushGroupMsg PushToken */
        PushToken?: (Uint8Array|null);

        /** PbPushGroupMsg PingFlag */
        PingFlag?: (number|null);

        /** PbPushGroupMsg GeneralFlag */
        GeneralFlag?: (number|null);
    }

    /** Represents a PbPushGroupMsg. */
    class PbPushGroupMsg implements IPbPushGroupMsg {

        /**
         * Constructs a new PbPushGroupMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbPushGroupMsg);

        /** PbPushGroupMsg Msg. */
        public Msg?: (Msg.MsgField.IMsg|null);

        /** PbPushGroupMsg Svrip. */
        public Svrip: number;

        /** PbPushGroupMsg PushToken. */
        public PushToken: Uint8Array;

        /** PbPushGroupMsg PingFlag. */
        public PingFlag: number;

        /** PbPushGroupMsg GeneralFlag. */
        public GeneralFlag: number;

        /**
         * Creates a new PbPushGroupMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbPushGroupMsg instance
         */
        public static create(properties?: Msg.IPbPushGroupMsg): Msg.PbPushGroupMsg;

        /**
         * Encodes the specified PbPushGroupMsg message. Does not implicitly {@link Msg.PbPushGroupMsg.verify|verify} messages.
         * @param message PbPushGroupMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbPushGroupMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbPushGroupMsg message, length delimited. Does not implicitly {@link Msg.PbPushGroupMsg.verify|verify} messages.
         * @param message PbPushGroupMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbPushGroupMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbPushGroupMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbPushGroupMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbPushGroupMsg;

        /**
         * Decodes a PbPushGroupMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbPushGroupMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbPushGroupMsg;

        /**
         * Verifies a PbPushGroupMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbPushGroupMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbPushGroupMsg
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbPushGroupMsg;

        /**
         * Creates a plain object from a PbPushGroupMsg message. Also converts values to other types if specified.
         * @param message PbPushGroupMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbPushGroupMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbPushGroupMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbSendMsgResp. */
    interface IPbSendMsgResp {

        /** PbSendMsgResp Result */
        Result?: (number|null);

        /** PbSendMsgResp ErrorMsg */
        ErrorMsg?: (string|null);

        /** PbSendMsgResp SendTime */
        SendTime?: (number|null);

        /** PbSendMsgResp SvrbusyWaitTime */
        SvrbusyWaitTime?: (number|null);

        /** PbSendMsgResp MsgSendInfo */
        MsgSendInfo?: (Msg.MsgField.IMsgSendInfo|null);

        /** PbSendMsgResp ErrType */
        ErrType?: (number|null);

        /** PbSendMsgResp TransSvrInfo */
        TransSvrInfo?: (Msg.MsgField.ITransSvrInfo|null);

        /** PbSendMsgResp ReceiptResp */
        ReceiptResp?: (Msg.MsgField.ImReceipt.IReceiptResp|null);

        /** PbSendMsgResp TextAnalysisResult */
        TextAnalysisResult?: (number|null);
    }

    /** Represents a PbSendMsgResp. */
    class PbSendMsgResp implements IPbSendMsgResp {

        /**
         * Constructs a new PbSendMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbSendMsgResp);

        /** PbSendMsgResp Result. */
        public Result: number;

        /** PbSendMsgResp ErrorMsg. */
        public ErrorMsg: string;

        /** PbSendMsgResp SendTime. */
        public SendTime: number;

        /** PbSendMsgResp SvrbusyWaitTime. */
        public SvrbusyWaitTime: number;

        /** PbSendMsgResp MsgSendInfo. */
        public MsgSendInfo?: (Msg.MsgField.IMsgSendInfo|null);

        /** PbSendMsgResp ErrType. */
        public ErrType: number;

        /** PbSendMsgResp TransSvrInfo. */
        public TransSvrInfo?: (Msg.MsgField.ITransSvrInfo|null);

        /** PbSendMsgResp ReceiptResp. */
        public ReceiptResp?: (Msg.MsgField.ImReceipt.IReceiptResp|null);

        /** PbSendMsgResp TextAnalysisResult. */
        public TextAnalysisResult: number;

        /**
         * Creates a new PbSendMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbSendMsgResp instance
         */
        public static create(properties?: Msg.IPbSendMsgResp): Msg.PbSendMsgResp;

        /**
         * Encodes the specified PbSendMsgResp message. Does not implicitly {@link Msg.PbSendMsgResp.verify|verify} messages.
         * @param message PbSendMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbSendMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbSendMsgResp message, length delimited. Does not implicitly {@link Msg.PbSendMsgResp.verify|verify} messages.
         * @param message PbSendMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbSendMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbSendMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbSendMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbSendMsgResp;

        /**
         * Decodes a PbSendMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbSendMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbSendMsgResp;

        /**
         * Verifies a PbSendMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbSendMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbSendMsgResp
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbSendMsgResp;

        /**
         * Creates a plain object from a PbSendMsgResp message. Also converts values to other types if specified.
         * @param message PbSendMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbSendMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbSendMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbSendMsg. */
    interface IPbSendMsg {

        /** PbSendMsg RoutingHead */
        RoutingHead?: (Msg.MsgField.IRoutingHead|null);

        /** PbSendMsg ContentHead */
        ContentHead?: (Msg.MsgField.IContentHead|null);

        /** PbSendMsg MsgBody */
        MsgBody?: (Msg.MsgField.ImMsgBody.IMsgBody|null);

        /** PbSendMsg MsgSeq */
        MsgSeq?: (number|null);

        /** PbSendMsg MsgRand */
        MsgRand?: (number|null);

        /** PbSendMsg SyncCookie */
        SyncCookie?: (Uint8Array|null);

        /** PbSendMsg AppShare */
        AppShare?: (Msg.MsgField.IAppShareInfo|null);

        /** PbSendMsg MsgVia */
        MsgVia?: (number|null);

        /** PbSendMsg DataStatist */
        DataStatist?: (number|null);

        /** PbSendMsg MultiMsgAssist */
        MultiMsgAssist?: (Msg.MsgField.IMultiMsgAssist|null);

        /** PbSendMsg PbInputNotifyInfo */
        PbInputNotifyInfo?: (Msg.MsgField.IPbInputNotifyInfo|null);

        /** PbSendMsg MsgCtrl */
        MsgCtrl?: (Msg.MsgField.IMsgCtrl|null);

        /** PbSendMsg ReceiptReq */
        ReceiptReq?: (Msg.MsgField.ImReceipt.IReceiptReq|null);

        /** PbSendMsg MultiSendSeq */
        MultiSendSeq?: (number|null);
    }

    /** Represents a PbSendMsg. */
    class PbSendMsg implements IPbSendMsg {

        /**
         * Constructs a new PbSendMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbSendMsg);

        /** PbSendMsg RoutingHead. */
        public RoutingHead?: (Msg.MsgField.IRoutingHead|null);

        /** PbSendMsg ContentHead. */
        public ContentHead?: (Msg.MsgField.IContentHead|null);

        /** PbSendMsg MsgBody. */
        public MsgBody?: (Msg.MsgField.ImMsgBody.IMsgBody|null);

        /** PbSendMsg MsgSeq. */
        public MsgSeq: number;

        /** PbSendMsg MsgRand. */
        public MsgRand: number;

        /** PbSendMsg SyncCookie. */
        public SyncCookie: Uint8Array;

        /** PbSendMsg AppShare. */
        public AppShare?: (Msg.MsgField.IAppShareInfo|null);

        /** PbSendMsg MsgVia. */
        public MsgVia: number;

        /** PbSendMsg DataStatist. */
        public DataStatist: number;

        /** PbSendMsg MultiMsgAssist. */
        public MultiMsgAssist?: (Msg.MsgField.IMultiMsgAssist|null);

        /** PbSendMsg PbInputNotifyInfo. */
        public PbInputNotifyInfo?: (Msg.MsgField.IPbInputNotifyInfo|null);

        /** PbSendMsg MsgCtrl. */
        public MsgCtrl?: (Msg.MsgField.IMsgCtrl|null);

        /** PbSendMsg ReceiptReq. */
        public ReceiptReq?: (Msg.MsgField.ImReceipt.IReceiptReq|null);

        /** PbSendMsg MultiSendSeq. */
        public MultiSendSeq: number;

        /**
         * Creates a new PbSendMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbSendMsg instance
         */
        public static create(properties?: Msg.IPbSendMsg): Msg.PbSendMsg;

        /**
         * Encodes the specified PbSendMsg message. Does not implicitly {@link Msg.PbSendMsg.verify|verify} messages.
         * @param message PbSendMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbSendMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbSendMsg message, length delimited. Does not implicitly {@link Msg.PbSendMsg.verify|verify} messages.
         * @param message PbSendMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbSendMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbSendMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbSendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbSendMsg;

        /**
         * Decodes a PbSendMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbSendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbSendMsg;

        /**
         * Verifies a PbSendMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbSendMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbSendMsg
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbSendMsg;

        /**
         * Creates a plain object from a PbSendMsg message. Also converts values to other types if specified.
         * @param message PbSendMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbSendMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbSendMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbGetMsgResp. */
    interface IPbGetMsgResp {

        /** PbGetMsgResp Result */
        Result?: (number|null);

        /** PbGetMsgResp ErrorMsg */
        ErrorMsg?: (string|null);

        /** PbGetMsgResp SyncCookie */
        SyncCookie?: (Uint8Array|null);

        /** PbGetMsgResp Flag */
        Flag?: (Msg.SyncFlag|null);

        /** PbGetMsgResp UinPairMsgs */
        UinPairMsgs?: (Msg.MsgField.IUinPairMsg[]|null);

        /** PbGetMsgResp Binduin */
        Binduin?: (number|Long|null);

        /** PbGetMsgResp Msgrsptype */
        Msgrsptype?: (number|null);

        /** PbGetMsgResp Pubaccountcookie */
        Pubaccountcookie?: (Uint8Array|null);

        /** PbGetMsgResp Ispartialsync */
        Ispartialsync?: (boolean|null);

        /** PbGetMsgResp Msgctrlbuf */
        Msgctrlbuf?: (Uint8Array|null);
    }

    /** Represents a PbGetMsgResp. */
    class PbGetMsgResp implements IPbGetMsgResp {

        /**
         * Constructs a new PbGetMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbGetMsgResp);

        /** PbGetMsgResp Result. */
        public Result: number;

        /** PbGetMsgResp ErrorMsg. */
        public ErrorMsg: string;

        /** PbGetMsgResp SyncCookie. */
        public SyncCookie: Uint8Array;

        /** PbGetMsgResp Flag. */
        public Flag: Msg.SyncFlag;

        /** PbGetMsgResp UinPairMsgs. */
        public UinPairMsgs: Msg.MsgField.IUinPairMsg[];

        /** PbGetMsgResp Binduin. */
        public Binduin: (number|Long);

        /** PbGetMsgResp Msgrsptype. */
        public Msgrsptype: number;

        /** PbGetMsgResp Pubaccountcookie. */
        public Pubaccountcookie: Uint8Array;

        /** PbGetMsgResp Ispartialsync. */
        public Ispartialsync: boolean;

        /** PbGetMsgResp Msgctrlbuf. */
        public Msgctrlbuf: Uint8Array;

        /**
         * Creates a new PbGetMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbGetMsgResp instance
         */
        public static create(properties?: Msg.IPbGetMsgResp): Msg.PbGetMsgResp;

        /**
         * Encodes the specified PbGetMsgResp message. Does not implicitly {@link Msg.PbGetMsgResp.verify|verify} messages.
         * @param message PbGetMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbGetMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbGetMsgResp message, length delimited. Does not implicitly {@link Msg.PbGetMsgResp.verify|verify} messages.
         * @param message PbGetMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbGetMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbGetMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbGetMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbGetMsgResp;

        /**
         * Decodes a PbGetMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbGetMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbGetMsgResp;

        /**
         * Verifies a PbGetMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbGetMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbGetMsgResp
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbGetMsgResp;

        /**
         * Creates a plain object from a PbGetMsgResp message. Also converts values to other types if specified.
         * @param message PbGetMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbGetMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbGetMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbGetMsgReq. */
    interface IPbGetMsgReq {

        /** PbGetMsgReq Flag */
        Flag?: (Msg.SyncFlag|null);

        /** PbGetMsgReq SyncCookie */
        SyncCookie?: (Uint8Array|null);

        /** PbGetMsgReq RambleFlag */
        RambleFlag?: (number|null);

        /** PbGetMsgReq LatestRambleNumber */
        LatestRambleNumber?: (number|null);

        /** PbGetMsgReq OtherRambleNumber */
        OtherRambleNumber?: (number|null);

        /** PbGetMsgReq OnlineSyncFlag */
        OnlineSyncFlag?: (number|null);

        /** PbGetMsgReq ContextFlag */
        ContextFlag?: (number|null);

        /** PbGetMsgReq WhisperSessionId */
        WhisperSessionId?: (number|null);

        /** PbGetMsgReq MsgReqType */
        MsgReqType?: (number|null);

        /** PbGetMsgReq PubaccountCookie */
        PubaccountCookie?: (Uint8Array|null);

        /** PbGetMsgReq MsgCtrlBuf */
        MsgCtrlBuf?: (Uint8Array|null);

        /** PbGetMsgReq ServerBuf */
        ServerBuf?: (Uint8Array|null);
    }

    /** Represents a PbGetMsgReq. */
    class PbGetMsgReq implements IPbGetMsgReq {

        /**
         * Constructs a new PbGetMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPbGetMsgReq);

        /** PbGetMsgReq Flag. */
        public Flag: Msg.SyncFlag;

        /** PbGetMsgReq SyncCookie. */
        public SyncCookie: Uint8Array;

        /** PbGetMsgReq RambleFlag. */
        public RambleFlag: number;

        /** PbGetMsgReq LatestRambleNumber. */
        public LatestRambleNumber: number;

        /** PbGetMsgReq OtherRambleNumber. */
        public OtherRambleNumber: number;

        /** PbGetMsgReq OnlineSyncFlag. */
        public OnlineSyncFlag: number;

        /** PbGetMsgReq ContextFlag. */
        public ContextFlag: number;

        /** PbGetMsgReq WhisperSessionId. */
        public WhisperSessionId: number;

        /** PbGetMsgReq MsgReqType. */
        public MsgReqType: number;

        /** PbGetMsgReq PubaccountCookie. */
        public PubaccountCookie: Uint8Array;

        /** PbGetMsgReq MsgCtrlBuf. */
        public MsgCtrlBuf: Uint8Array;

        /** PbGetMsgReq ServerBuf. */
        public ServerBuf: Uint8Array;

        /**
         * Creates a new PbGetMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbGetMsgReq instance
         */
        public static create(properties?: Msg.IPbGetMsgReq): Msg.PbGetMsgReq;

        /**
         * Encodes the specified PbGetMsgReq message. Does not implicitly {@link Msg.PbGetMsgReq.verify|verify} messages.
         * @param message PbGetMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPbGetMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PbGetMsgReq message, length delimited. Does not implicitly {@link Msg.PbGetMsgReq.verify|verify} messages.
         * @param message PbGetMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPbGetMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PbGetMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbGetMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg.PbGetMsgReq;

        /**
         * Decodes a PbGetMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbGetMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg.PbGetMsgReq;

        /**
         * Verifies a PbGetMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbGetMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbGetMsgReq
         */
        public static fromObject(object: { [k: string]: any }): Msg.PbGetMsgReq;

        /**
         * Creates a plain object from a PbGetMsgReq message. Also converts values to other types if specified.
         * @param message PbGetMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Msg.PbGetMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbGetMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
